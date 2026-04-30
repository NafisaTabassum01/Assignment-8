// "use client";
import Image from 'next/image';
import cow4 from '../../../../assets/cow-4.png';
import cow1 from '../../../../assets/cow.png';
import cow2 from '../../../../assets/cow-2.png';
import goat from '../../../../assets/goat.png';
import camel from '../../../../assets/camel.png';
import cow3 from '../../../../assets/cow-3.png';
import cow5 from '../../../../assets/cow-5.png';
import cow6 from '../../../../assets/cow-6.png';
import cow7 from '../../../../assets/cow-7.png';
import goat2 from '../../../../assets/goat-2.png';
import goat3 from '../../../../assets/goat-3.png';
import goat4 from '../../../../assets/goat-4.png';
import Form from '@/components/shared/Form';


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



export default async function Page({ params }) {

 const { id } = await params;
 const res = await fetch(
    "https://gist.githubusercontent.com/NafisaTabassum01/4b3e6993282ad6aa93f91fc3bfab3d88/raw/4acc6e50887dee8c83b804e4dbd6de2c00530d2a/gistfile1.txt",
    { cache: "no-store" }
  );

  const data = await res.json();

  const animal = data.find((item) => item.id === Number(id));

  if (!animal) {
    return (
      <div>
        <h2>Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#fefae0f4] py-10">
      <div className="w-10/12 mx-auto shadow-lg rounded-2xl bg-[#fffef9d6]">
     <div className=' mx-auto flex flex-col gap-20 items-center md:flex-row  justify-center '>

<div className=''>
  <Image src={imageMap[animal.image]} alt='' className='md:h-50 w-90'/>
</div>      
  <div>
     <div>
         <h1 className="text-2xl font-bold text-[#AE6422] pt-5 pl-2">{animal.name}</h1>
      <p className='badge badge-soft text-[14px] bg-transparent border border-[#AA6122] text-[#AA6122] rounded-2xl mt-2 pl-2'>{animal.category}</p>
     </div>
      <p className='text-[24px] pt-1.5 font-bold text-green-900'><i className="fa-solid fa-bangladeshi-taka-sign pl-1"></i>{animal.price}</p>
      <div className='flex pb-8 gap-10'>
        <div className='pl-2'>
        <p className='text-[18px] pt-4 font-medium text-[#BC6C25]'><i className="fa-solid fa-dna"></i> Breed</p>
        <p className='text-[18px] pt-2 font-medium text-[#BC6C25]'><i className="fa-regular fa-calendar-days"></i> Age</p>
        <p className='text-[18px] pt-2 font-medium text-[#BC6C25]'><i className="fa-solid fa-weight-hanging"></i> Weight</p>
        <p className='text-[18px] pt-2 font-medium text-[#BC6C25]'><i className="fa-solid fa-location-dot"></i> Location</p>
        <p className='text-[18px] pt-2 font-medium text-[#BC6C25]'><i className="fa-solid fa-book"></i> Description</p>
        </div>
        <div>
            <p className='text-[18px] pt-4 font-semibold text-[#894E1B]'>{animal.breed}</p>
            <p className='text-[18px] pt-2 font-semibold text-[#894E1B]'>{animal.age}</p>
            <p className='text-[18px] pt-2 font-semibold text-[#894E1B]'>{animal.weight} kg</p>
            <p className='text-[18px] pt-2 font-semibold text-[#894E1B]'>{animal.location}</p>
        <p className='text-[18px] pt-2 font-semibold text-[#894E1B] pr-4'>{animal.description}</p>
        </div>
      </div>

      </div>
     </div>
      </div>
      <div className="w-10/12 mx-auto flex flex-col gap-16 items-center shadow-lg rounded-2xl md:flex-row justify-center bg-[#fffef9b5] pt-12 mt-12">
    <Form></Form>   
      </div>
      <hr className='mt-10 w-10/12 mx-auto border border-[#bdb1a58e]'/>
      <p className='text-[14px] text-[#894E1B] text-center pt-2'><i className="fa-solid fa-circle-exclamation"></i><span className='font-bold'>  Note</span>: You must be logged in to confirm booking.</p>
    </div>
  );
}