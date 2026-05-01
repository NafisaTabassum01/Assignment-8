"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SortBy from "./shared/SortBy";

import cow1 from "../assets/cow.png";
import cow2 from "../assets/cow-2.png";
import goat from "../assets/goat.png";
import camel from "../assets/camel.png";
import cow4 from "../assets/cow-4.png";
import cow3 from "../assets/cow-3.png";
import cow5 from "../assets/cow-5.png";
import cow6 from "../assets/cow-6.png";
import cow7 from "../assets/cow-7.png";
import goat2 from "../assets/goat-2.png";
import goat3 from "../assets/goat-3.png";
import goat4 from "../assets/goat-4.png";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const imageMap = {
  "cow.png": cow1,
  "cow-2.png": cow2,
  "goat.png": goat,
  "camel.png": camel,
  "cow-4.png": cow4,
  "cow-3.png": cow3,
  "cow-5.png": cow5,
  "cow-6.png": cow6,
  "cow-7.png": cow7,
  "goat-2.png": goat2,
  "goat-3.png": goat3,
  "goat-4.png": goat4,
};

export default function AnimalClient({ animals }) {
  const [sortingType, setSortingType] = useState("");

  let sortedAnimals = [...animals];

  if (sortingType === "low") {
    sortedAnimals.sort((a, b) => a.price - b.price);
  } else if (sortingType === "high") {
    sortedAnimals.sort((a, b) => b.price - a.price);
  }

  const { data: session } = authClient.useSession();
const router = useRouter();

const handleDetails = (id) => {
  if (!session) {
    toast.error("Please login first");
    router.push(`/login?redirect=/animal/${id}`);
    return;
  }

  router.push(`/animal/${id}`);
};

  return (
    <div className="bg-[#fefae05a] py-10">
      <div className="w-10/12 mx-auto">
        <p className="font-extrabold text-[30px] text-[#394b23de] pt-8">
          All Animals
        </p>

        <SortBy
          sortingType={sortingType}
          setSortingType={setSortingType}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {sortedAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-[#fbf7d9d8] p-3 shadow-lg rounded-xl mb-8"
            >
              <Image
                src={imageMap[animal.image]}
                alt={animal.name}
                className="rounded-xl pb-4 h-40 object-cover w-full"
              />

              <p className="text-[20px] pl-2 pb-2.5 font-bold text-[#884E1B]">
                {animal.name}
              </p>

              <p className="text-[16px] pl-2 pb-2.5 font-medium text-[#3c5126e6]">
                {animal.breed}
              </p>

              <p className="text-[18px] pl-2 pb-2.5 font-bold text-green-900">
                <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                {animal.price}
              </p>

              <div className="flex justify-between">
                <p className="text-[18px] pl-2 pb-2.5 font-medium text-[#7c512ac9]">
                  <i className="fa-solid fa-location-dot"></i>
                  {animal.location}
                </p>

               <button
                onClick={() => handleDetails(animal.id)}
                className="border border-[#AA6122] p-1.5 text-[#AA6122] rounded">
                Details
                </button>

              </div>
            </div>
          ))}
        </div>
            <hr className='mt-10 w-10/12 mx-auto border border-[#bdb1a58e]'/>
      <p className='text-[14px] text-[#894E1B] text-center pt-2'><i className="fa-solid fa-circle-exclamation"></i><span className='font-bold'>  Note</span>: You must be logged in to see details and confirm booking.</p>
      
      </div>
    </div>
  );
}