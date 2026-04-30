"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

  const {register,handleSubmit,formState: { errors }} = useForm()


const handleLogin = (data)=> {
 console.log(data)
}
 console.log(errors)


    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh] '>
            <div className='bg-[#fbf7d9d8] py-8 px-10 rounded-xl w-90 '>
        <p className='text-lg font-bold'>Login</p>

        <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
  
  <legend className="text-[#884E1B] text-[18px] font-medium pt-5">Email</legend>
  <input type="email" {...register("email",{ required: "Email field is required" })}  className="input mx-auto bg-[#fbfbf9bc]" placeholder="Enter your email address" />
    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

  
  <legend className="text-[#884E1B] text-[17px] font-medium pt-3">Password</legend>
  <input type="password" {...register("password",{ required: "Password field is required" })} className="input bg-[#fbfbf9bc]" placeholder="Enter your password" />
  {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
  
  <button className='btn bg-[#1b4332] text-[#dda15e] text-[18px] font-medium mt-4'>Login</button>
</fieldset>
 <p className=' text-[#884E1B] text-[16px] font-medium pt-3'>Don't have an account? <Link href={"/register"} className='text-[17px] font-semibold text-[#1b4332de]'><u>Register</u></Link></p>
</form>
            </div>
        </div>
    );
};

export default LoginPage;