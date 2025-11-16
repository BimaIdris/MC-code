import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";

const home = async () => {
  const { userId } = await auth();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This is a protected homepage. Authentication is powered by Kinde.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {userId ? (
              <>
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Register
                  </Button>
                </Link>
                <Link href="sign-in">
                  <Button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Login to account
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full bg-gray-200 text-center py-2">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} MC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default home;
