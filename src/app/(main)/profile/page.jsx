"use client";
import Image from "next/image";
import React from "react";
import { authClient } from "@/lib/auth-client";
import user2 from "@/assets/user.png";
import Link from "next/link";

const ProfilePage = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <span className="loading loading-spinner loading-lg"></span>

  return (
    <div className='bg-[#fbf7d944] flex justify-center items-center min-h-[80vh]'>

      <div className='bg-[#fbf7d9d8] rounded-xl mx-auto shadow-lg'>

        <div className='bg-[#1b4332] rounded-t-xl flex flex-col items-center'>

          <p className='text-[#dda15e] text-[24px] font-bold pb-1.5 pt-7'>
            My Profile
          </p>

          <Image
            src={user?.image || user2}
            alt="user"
            width={80}
            height={80}
            className="rounded-full mt-3 mb-4"
          />

        </div>

        <div className='flex justify-around gap-8 px-4 md:px-20 md:gap-20 pb-8'>
          <div>
            <p className='text-[#894E1B] text-[18px] font-semibold pt-6'>Name</p>
            <p className='text-[#894E1B] text-[18px] font-semibold pt-3'>Email</p>
          </div>

          <div>
            <p className='text-[#894E1B] text-[18px] font-semibold pt-6'>
              {user?.name || "No Name"}
            </p>
            <p className='text-[#894E1B] text-[18px] font-semibold pt-3'>
              {user?.email || "No Email"}
            </p>
          </div>
        </div>

<div className="text-center">
    <Link href={"/updateProfile"}><button className="btn w-9/12  mb-8 bg-[#dda15e] text-[#894E1B] text-[17px]">Update Information</button>
</Link>

</div>

      </div>

    </div>
  );
};

export default ProfilePage;