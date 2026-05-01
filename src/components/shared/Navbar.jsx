"use client";

import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import user2 from "../../assets/user.png";
import { authClient } from '@/lib/auth-client';


const Navbar = () => {

const { data: session,isPending } = authClient.useSession();
const user = session?.user;

console.log(user, "user")

  return (

        <div className='shadow-sm bg-[#fefae051]'>
<div className='w-full md:w-11/12 mx-auto'>
<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li className='text-[18px] font-bold text-[#606C38]'><Link href={'/'}>Home</Link></li>
    
      <li className='text-[18px] font-bold text-[#606C38]'><Link href={'/allAnimal'}>All Animal</Link></li>
      </ul>
    </div>

    <Link href={'/'} className="text-[20px] md:text-[24px] text-[#bc6c25] font-extrabold">QurbaniHat </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1 gap-8">
      
      <li className='text-[18px] font-bold text-[#606C38]'><Link href={'/'} className='hover:bg-amber-100 p-2'>Home</Link></li>
      <li className='text-[18px] font-bold text-[#606C38]'><Link href={'/allAnimal'}className='hover:bg-amber-100 p-2'>All Animal</Link></li>
    </ul>
  </div>
  <div className="navbar-end">

{isPending ? <span className="loading loading-spinner loading-xs"></span> : 

user ? (<div className='flex item center gap-2'>
  <h2 className='pt-2 pr-1 font-semibold text-green-800'>{user.name}</h2>
  <Link href={"/profile"}>
  <Image 
    src={user?.image || user2} 
    alt="user icon"
    width={40}
    height={40}
    className="rounded-full"
  />
</Link>   
  <Link href={"/login"} className="btn ml-4 bg-[#1b4332] text-white font-medium" onClick={async()=>await authClient.signOut()}>Logout</Link>
</div>) : 
( 
  <Link href={"/login"} className="btn ml-4 bg-[#1b4332] text-white font-medium">Login</Link>
)}

</div>
</div>   
   </div>
  </div>
    );
};

export default Navbar;