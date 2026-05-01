"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";


const LoginPage = () => {

  const {register,handleSubmit,formState: { errors }} = useForm()


const [showPassword, setShowPassword] = useState(false)

const handleLogin = async (data)=> {
 console.log(data)
 const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(error,res)
if(error){
    alert(error.message)
}

if(res){
      toast.success("Login Successful");
}

}

const handleGooglesignin = async()=> {
       const data = await authClient.signIn.social({
    provider: "google",
  });

}



    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh] '>
            <div className='bg-[#fbf7d9d8] py-8 px-10 rounded-xl w-90 '>
        <p className='text-lg font-bold'>Login</p>

        <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
  
  <legend className="text-[#884E1B] text-[18px] font-medium pt-5">Email</legend>
  <input type="email" {...register("email",{ required: "Email field is required" })}  className="input mx-auto bg-[#fbfbf9bc]" placeholder="Enter your email address" />
    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

  
  <fieldset className='relative'>
    <legend className="text-[#884E1B] text-[17px] font-medium pt-3">Password</legend>
  <input type={showPassword ?"text" :"password"} {...register("password",{ required: "Password field is required" })} className="input bg-[#fbfbf9bc]" placeholder="Enter your password" />

  <span onClick={()=> setShowPassword(!showPassword)} className='right-2 top-3 absolute cursor-pointer'>
    {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>

  {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
  </fieldset>
  
  <button className='btn bg-[#1b4332] text-[#dda15e] text-[18px] font-medium mt-4'>Login</button>
</fieldset>

<button onClick={handleGooglesignin} 
className='btn bg-[#1b4332] text-[#dda15e] text-[16px] font-medium mt-4 w-full'> 
<i className="fa-brands fa-google"></i> Sign In With Google</button>


 <p className=' text-[#884E1B] text-[16px] font-medium pt-3'>Don't have an account? <Link href={"/register"} className='text-[17px] font-semibold text-[#1b4332de]'><u>Register</u></Link></p>
</form>
            </div>

        </div>
    );
};

export default LoginPage;