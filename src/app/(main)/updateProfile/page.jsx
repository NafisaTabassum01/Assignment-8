"use client";

import Image from "next/image";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import user2 from "@/assets/user.png";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  if (isPending)
    return <span className="loading loading-spinner loading-lg"></span>;

  const safeImage =
    user?.image && user.image.startsWith("http")
      ? user.image
      : user2;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const image = form.photo.value;

    if (!name && !image) {
      toast.error("Please enter something to update");
      setLoading(false);
      return;
    }

    const { error } = await authClient.updateUser({
      ...(name && { name }),
      ...(image && { image }),
    });

    if (error) {
      toast.error(error.message || "Update failed");
      setLoading(false);
      return;
    }

    toast.success("Profile Updated ✅");
    setLoading(false);

    router.push("/profile");
    router.refresh();
  };

  return (
    <div className='bg-[#fbf7d944] flex justify-center items-center min-h-[80vh]'>

      <div className='bg-[#fbf7d9d8] rounded-xl w-85 mx-auto shadow-lg'>

        <div className='bg-[#1b4332] rounded-t-xl flex flex-col items-center'>

          <p className='text-[#dda15e] text-[24px] font-bold pt-7'>
            Update Information
          </p>

          <Image
            src={safeImage}
            alt="user"
            width={80}
            height={80}
            className="rounded-full mt-3 mb-4"
          />

        </div>

        <form onSubmit={handleUpdate} className="px-6 pb-6 flex flex-col">

          <label className="pt-4 text-[#894E1B] text-[17px] font-semibold">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter new name"
            className="input w-full"
          />

          <label className="mt-4 text-[#894E1B] text-[17px] font-semibold">Photo URL</label>
          <input
            name="photo"
            type="text"
            placeholder="Enter new photo URL"
            className="input w-full"
          />

          <button disabled={loading} className="w-full mt-6 py-1 bg-[#dda15e] text-[#894E1B] text-[17px] cursor-pointer">
            {loading ? "Updating..." : "Update"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default UpdateProfilePage;