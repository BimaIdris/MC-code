import { clerkMiddleware, clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { routeMatchers } from "./lib/routes";

const checkRoleAndRedirect = (
  req: NextRequest,
  role: string | undefined,
  allowedRoles: keyof typeof routeMatchers
): NextResponse | undefined => {
  if (routeMatchers[allowedRoles](req) && role !== allowedRoles) {
    const url = new URL("/", req.url);
    console.log(
      "Unauthorised access attempt to ",
      req.url,
      " with role ",
      role
    );
    return NextResponse.redirect(url);
  }
};

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // Try multiple places where role might be stored in sessionClaims
  const roleFromSession =
    (sessionClaims as any)?.metadata?.role ??
    (sessionClaims as any)?.publicMetadata?.role ??
    (sessionClaims as any)?.privateMetadata?.role ??
    (sessionClaims as any)?.role;

  let role: string | undefined = roleFromSession;

  // If no role in session claims, try fetching the user object (server-side) as a fallback
  if (!role && userId) {
    try {
      const client = await clerkClient();
      const user = await client.users.getUser(userId);
      role =
        (user as any)?.publicMetadata?.role ??
        (user as any)?.privateMetadata?.role ??
        (user as any)?.metadata?.role ??
        (user as any)?.role;
    } catch (err) {
      console.warn("Could not fetch user for role fallback", err);
    }
  }

  // Normalize role strings and handle known alias
  role = role ? String(role).toLowerCase().trim() : undefined;
  if (role === "patientz") role = "patient";

  console.log(
    "Resolved role from session/user:",
    role,
    "sessionClaims keys:",
    sessionClaims ? Object.keys(sessionClaims) : null
  );
  //console.log("User role in middleware:", userId, role);
  const response =
    checkRoleAndRedirect(req, role, "admin") ||
    checkRoleAndRedirect(req, role, "doctor") ||
    checkRoleAndRedirect(req, role, "nurse") ||
    checkRoleAndRedirect(req, role, "patient");

  if (response) return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
