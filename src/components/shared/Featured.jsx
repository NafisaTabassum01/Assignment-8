import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cow1 from '../../assets/cow.png';
import cow2 from '../../assets/cow-2.png';
import goat from '../../assets/goat.png';
import camel from '../../assets/camel.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoins } from "@fortawesome/free-solid-svg-icons";



const imageMap = {
  "cow.png": cow1,
  "cow-2.png": cow2,
  "goat.png": goat,
  "camel.png": camel,
};

const getAnimals = async () => {
  const res = await fetch('https://pastebin.com/raw/ty6kkSSh');
  const data = await res.json();
  return data;
};

const Featured = async () => {
  const featuredAnimals = await getAnimals();

  return (
    <div className='bg-[#fefae051]'>
      <div className='w-10/12 mx-auto pt-10'>
        
        {/* header */}
        <div className='flex justify-between'>
          <p className='text-[24px] font-bold text-[#2a381ade]'>
            Featured Animals
          </p>

          <Link
            href={"/allAnimal"}
            className='border border-[#AA6122] p-1.5 text-[#AA6122] rounded'>
            View All
          </Link>
        </div>

        {/* grid section */}
        <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-4'>
          {featuredAnimals.map((animals) => {
            return (
              <div key={animals.id} className='bg-[#fbf7d9d8] p-3 shadow-lg rounded-xl'>
                <Image src={imageMap[animals.image]} alt='cow' className='rounded-xl pb-4'/>
                <p className='text-[20px] pl-2 pb-2.5 font-bold text-[#884E1B]'>{animals.name}</p>
                <p className='text-[16px] pl-2 pb-2.5 font-medium text-[#3c5126e6]'>{animals.breed}</p>
                <p className='text-[18px] pl-2 pb-2.5 font-bold text-green-900'><i class="fa-solid fa-bangladeshi-taka-sign"></i>{animals.price}</p>
                <p className='text-[18px] pl-2 pb-2.5 font-medium text-[#7c512ac9]'><i class="fa-solid fa-location-dot"></i>{animals.location}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Featured;