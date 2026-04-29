import Image from 'next/image';
import React from 'react';
import cow from '../../assets/cow.png';
import cow1 from '../../assets/cowwww.png';
import cow2 from '../../assets/cow-2.png';
import goat from '../../assets/goat.png';
import goat2 from '../../assets/goat-4.png';

const TopBreeds = () => {
    return (
        <div className='bg-[#fbf7d9c3]'>
            <p className='pt-6 pl-6 text-2xl font-bold text-[#606c38]'>Top Breeds</p>
            <div className='grid grid-cols-1 md:grid-cols-5 text-center pb-10 px-4'>
                <div className='bg-[#d4a373] p-4 m-3 rounded-lg'>
        <Image src={cow} alt='cow' className='h-35'/>
        <p className='text-[#faedcd] text-[18px] font-semibold pt-3'>Local Desi Cow</p>
        <p className='text-[#faedcd] text-[16px]'>Strong and Healthy</p>
            </div>
            <div className='bg-[#d4a373] p-4 m-3 rounded-lg'>
        <Image src={cow1} alt='cow' className='h-35'/>
        <p className='text-[#faedcd] text-[18px] font-semibold pt-3'>Indian Gir Cow</p>
        <p className='text-[#faedcd] text-[16px]'>High Quality Breed</p>
            </div>
            <div className='bg-[#d4a373] p-4 m-3 rounded-lg'>
        <Image src={cow2} alt='cow' className='h-35'/>
        <p className='text-[#faedcd] text-[18px] font-semibold pt-3'>Red Chittagong Cow</p>
        <p className='text-[#faedcd] text-[16px]'>Best For Qurbani</p>
            </div>
            <div className='bg-[#d4a373] p-4 m-3 rounded-lg'>
        <Image src={goat2} alt='cow' className='h-35'/>
        <p className='text-[#faedcd] text-[18px] font-semibold pt-3'>Boer Goet</p>
        <p className='text-[#faedcd] text-[16px]'>Fast growth</p>
            </div>
            <div className='bg-[#d4a373] p-4 m-3 rounded-lg'>
        <Image src={goat} alt='cow' className='h-35'/>
        <p className='text-[#faedcd] text-[18px] font-semibold pt-3'>Black Bengal Goat</p>
        <p className='text-[#faedcd] text-[16px]'>Active and Healthy</p>
            </div>
            </div>
        </div>
    );
};

export default TopBreeds;