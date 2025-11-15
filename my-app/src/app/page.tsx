import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const home = () => {
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
          {/* <div className="flex justify-center gap-4">
            <LoginLink>Sign in</LoginLink>
          </div> */}
          <div className="flex justify-center gap-4 mt-4">
            <LoginLink>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
              </button>
            </LoginLink>
            <Link href="#">
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Register
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default home;
