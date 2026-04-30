import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cow1 from '../../../assets/cow.png';
import cow2 from '../../../assets/cow-2.png';
import goat from '../../../assets/goat.png';
import camel from '../../../assets/camel.png';
import cow4 from '../../../assets/cow-4.png';
import cow3 from '../../../assets/cow-3.png';
import cow5 from '../../../assets/cow-5.png';
import cow6 from '../../../assets/cow-6.png';
import cow7 from '../../../assets/cow-7.png';
import goat2 from '../../../assets/goat-2.png';
import goat3 from '../../../assets/goat-3.png';
import goat4 from '../../../assets/goat-4.png';


const imageMap = {
  "cow.png": cow1,
  "cow-2.png": cow2,
  "goat.png": goat,
  "camel.png": camel,
  "cow-4.png": cow4,
  "cow-3.png": cow3,
  "cow-6.png": cow6,
  "cow-7.png": cow7,
  "cow-5.png": cow5,
  "goat-2.png": goat2,
  "goat-3.png": goat3,
  "goat-4.png": goat4,
};


const getAnimals = async () => {
  const res = await fetch('https://gist.githubusercontent.com/NafisaTabassum01/c375d7c0eb972be211183daa333e4b9c/raw/4d516914bac8faafdfdd44586fd95038fd27ccd1/gistfile1.txt');
  const data = await res.json();
  return data;
};


const  AllAnimalpage =async () => {

    const AllAnimals = await getAnimals();

    return (
        <div className='bg-[#fefae05a]'>
            <div className='w-10/12 mx-auto'>
            
         <p className=' font-extrabold text-[30px] text-[#394b23de] pt-8'>All Animals</p>
                 <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-4'>
                   {AllAnimals.map((animals) => {
                     return (
                       <div key={animals.id} className='bg-[#fbf7d9d8] p-3 shadow-lg rounded-xl mb-8'>
                         <Image src={imageMap[animals.image]} alt='cow' className='rounded-xl pb-4 h-40'/>
                         <p className='text-[20px] pl-2 pb-2.5 font-bold text-[#884E1B]'>{animals.name}</p>
                         <p className='text-[16px] pl-2 pb-2.5 font-medium text-[#3c5126e6]'>{animals.breed}</p>
                         <p className='text-[18px] pl-2 pb-2.5 font-bold text-green-900'><i className="fa-solid fa-bangladeshi-taka-sign"></i>{animals.price}</p>
                         <div className='flex justify-between'>
                            <p className='text-[18px] pl-2 pb-2.5 font-medium text-[#7c512ac9]'><i className="fa-solid fa-location-dot"></i>{animals.location}</p>
                            <Link href={`/animal/${animals.id}`} className=' border border-[#AA6122] p-1.5 text-[#AA6122] rounded'>Details</Link>
                         </div>
                       </div>
                     );
                   })}
                 </div>
         



        </div>
        </div>
    );
};

export default AllAnimalpage;