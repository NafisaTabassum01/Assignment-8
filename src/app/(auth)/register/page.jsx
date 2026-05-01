"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';;

const RegisterPage = () => {
const router = useRouter();

  const {register,handleSubmit,formState: { errors }} = useForm()


const handleRegister = async (data)=> {
 console.log(data)
 const {email,photo,password,name} = data;
 console.log(name,photo)

const {data:res,error} =await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/login",

});
if(res){
    alert("Signup Successful");
    router.push("/login");
}
console.log(res,error);
if(error){
    alert(error.message)
}

}

    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh] '>
            <div className='bg-[#fbf7d9d8] py-8 px-10 rounded-xl w-90 '>
        <p className='text-lg font-bold'>Register</p>

        <form onSubmit={handleSubmit(handleRegister)}>
    
    <fieldset className="fieldset">
  <legend className="text-[#884E1B] text-[18px] font-medium pt-5">Name</legend>
  <input type="text" {...register("name",{ required: "name field is required" })}  className="input mx-auto bg-[#fbfbf9bc]" placeholder="Enter your name" />
    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
</fieldset>

    <fieldset className="fieldset">
  <legend className="text-[#884E1B] text-[18px] font-medium pt-2">Email</legend>
  <input type="email" {...register("email",{ required: "Email field is required" })}  className="input mx-auto bg-[#fbfbf9bc]" placeholder="Enter your email address" />
    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
</fieldset>

    <fieldset className="fieldset">
  <legend className="text-[#884E1B] text-[18px] font-medium pt-2">Photo-url(link)</legend>
  <input type="text" {...register("photo",{ required: "photo url field is required" })}  className="input mx-auto bg-[#fbfbf9bc]" placeholder="Enter your photo-url(link)" />
    {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
</fieldset>

 <fieldset className="fieldset">
  <legend className="text-[#884E1B] text-[17px] font-medium pt-3">Password</legend>
  <input type="password" {...register("password",{ required: "Password field is required" })} className="input bg-[#fbfbf9bc]" placeholder="Enter your password" />
  {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
  </fieldset>
  
  <button className='btn bg-[#1b4332] text-[#dda15e] text-[18px] font-medium mt-4 w-full'>Register</button>

</form>
            </div>
        </div>
    );
};

export default RegisterPage;