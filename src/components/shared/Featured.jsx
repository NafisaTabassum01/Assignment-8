import Link from 'next/link';
import React from 'react';

const Featured = () => {
    return (
        <div className='bg-[#fefae051]'>
            <div className=' w-10/12 mx-auto pt-10'>
                <div className='flex justify-between'>
                <p className='text-[24px] font-bold text-[#2a381ade]'>Featured Animals</p>
                <Link href={"/allAnimal"} className='border border-[#AA6122] p-1.5 text-[#AA6122] rounded'>View All</Link>
            </div>
            </div>
        </div>
    );
};

export default Featured;