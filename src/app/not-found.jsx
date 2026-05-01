import React from "react";
import Link from "next/link";
import not from "../assets/not.png";
import Image from "next/image";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[] ">
      
      <Image src={not} alt="not-found" className="w-40 h-40"/>
      <h1 className="text-6xl font-bold text-[#BC6C25]">404</h1>

      <h2 className="text-2xl font-semibold mt-4 text-[#DDA15E]">
        Page Not Found
      </h2>

      <p className="mt-2 text-[#606C38]">
        Sorry, the page you are looking for dosen't exist.
      </p>

      <Link href="/" className="btn text-white mt-6 bg-[#606C38]">
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;