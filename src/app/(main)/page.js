import Banner from "@/components/shared/Banner";
import Featured from "@/components/shared/Featured";
import Tips from "@/components/shared/Tips";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Featured></Featured>
    <Tips></Tips>
   </div>
  );
}
