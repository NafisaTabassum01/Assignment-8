import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#1b4332] pb-5'>
          <div className='w-10/12 mx-auto text-center'>
            <div>
                <p className='text-[#dda15e] text-[54px] font-bold pt-10 pb-1.5'>QurbaniHat</p>
                <p className='text-[#e3dec0ac] text-[18px] font- font-semibold pb-1.5'>Your trusted partner for Qurbani</p>
                <p className='text-[#e3dec0ac] text-[16px] font-'>quality service | easy booking</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <p className='text-[#dda15e] pt-3'>Contact Us</p>
                    <p className='text-[#fefae0c9]'><i className="fa-solid fa-phone"></i> +880 1723456890</p>
                    <p className='text-[#fefae0c9]'><i className="fa-regular fa-envelope-open"></i> qurbanihat@gmail.com</p>
                </div>
                <div className='text-[#fefae0c9] pt-6'>
                    <p className='text-[#dda15e] pt-3'>Social Links</p>
                    <i className="pr-5 fa-brands fa-facebook"></i>
                    <i className="pr-5 fa-brands fa-instagram"></i>
                    <i className=" fa-brands fa-x-twitter"></i>
                </div>
            </div>
            <hr className='border border-[#fefae02b] mt-4 mb-4'/>
            <div className='flex flex-col gap-20 md:flex-row justify-around text-[16px]'>
                <p className='text-[#fefae066]'>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='text-[#fefae066] flex gap-8'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies</p>
                </div>
            </div>
          </div>

        </div>
    );
};

export default Footer;