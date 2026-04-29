import React from 'react';

const Tips = () => {
    return (
        <div className='bg-[#1b4332]'>
    <div className='w-10/12 mx-auto pt-8'>

        <p className='text-[#fefae0] font-bold text-[24px] pb-6'>Qurbani Tips </p>
           <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='border border-[#c1ba8ba5] rounded-2xl p-4'>
          <p className='text-[20px] text-[#dad090d6] font-semibold pb-2'>Choose Healthy</p>
          <p className='text-[16px] text-[#e3dec0ac]'>select active and healthy animel for the Qurbani.</p>
          </div>
          <div className='border border-[#c1ba8ba5] rounded-2xl p-4'>
          <p className='text-[20px] text-[#dad090d6] font-semibold pb-2'>Check The Age</p>
          <p className='text-[16px] text-[#e3dec0ac]'>Ensure the animel meets the age requirments.</p>
          </div>
          <div className='border border-[#c1ba8ba5] rounded-2xl p-4 '>
          <p className='text-[20px] text-[#dad090d6] font-semibold pb-2'>Proper Care</p>
          <p className='text-[16px] text-[#e3dec0ac]'>Provide good food and care brfore Qurbani.</p>
          </div>
            <div>
            </div>
           </div>

        </div>       
       </div>
    );
};

export default Tips;