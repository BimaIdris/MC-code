import { cookies } from "next/headers";
import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";
import { SidebarProvider } from "./ui/sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <div>
      <SidebarProvider defaultChecked={defaultOpen}>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
