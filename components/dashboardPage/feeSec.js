"use client";
import { useSearchParams, useRouter } from "next/navigation";
function FeeSection({profile}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  

  const enroll = searchParams.get("enroll");
  if(enroll){
    router.push(`/dashboard/${profile.data.userName}/switches?enroll=${enroll}`)
  }else{
    return ( 
      <div className="p-4 h-[200px] bg-[#013030] text-white text-lg md:text-3xl">
      <div>Current Balance</div>
      <div>200Tk</div>
    </div>
   );
  }
   
}

export default FeeSection;