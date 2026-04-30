import Image from 'next/image';
import React from 'react';
import banner from '../../assets/bannerCow (2).png';
import Link from 'next/link';
import arrow from '../../assets/arrow.png';

const Banner = () => {
    return (
        // <div className='bg-[#fbf7d9d8]'>
        <div className='bg-linear-to-r from-[#fbf7d9d8] to-[#a96427de]'>
<div className='container mx-auto flex flex-col md:flex-row justify-around gap-20 pt-10'>
                 <div className='p-5 pt-8'><p className='text-[54px] text-[#93541D] font-extrabold'>Find Your Perfect <br /> Qurbani Animal</p>
             <p className='text-[17px] text-[#455a2ecf] font-semibold pt-5'>Healthy Animal,Trusted Farm,Easy Booking.</p> <p></p> <br />

             <Link href={"/allAnimal"}> <button className='btn bg-[#374A21] text-white font-medium'>Browse All Animals<Image src={arrow} alt=''/></button></Link>
             
             </div>
            <div><Image src={banner} alt='' className='w-100 h-80'/></div>
           </div>
        </div>
    );
};

export default Banner;