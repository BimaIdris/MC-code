import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="https://images.pexels.com/photos/6129437/pexels-photo-6129437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="doctors"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-gray-900/60 z-10 flex flex-col items-center justify-center">
          <Image
            src="/assets/MC-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-white text-3xl font-bold">
            Record Management System
          </h1>
          <p className="text-white text-lg">You're welcome</p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
      <div className=""></div>
    </div>
  );
};

export default AuthLayout;
