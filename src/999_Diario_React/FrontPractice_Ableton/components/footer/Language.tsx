import React from "react";

export default function Language() {
 return (
  <div className="basis-[30%] pb-[clamp(29px,4vw,64px)] lg:pb-0 text-xs lg:text-sm xl:text-base leading-5 lg:leading-6 xl:leading-7">
   <h4 className={`font-bold`}>Language and Location</h4>
   <form className="flex gap-1 font-bold text-xs">
    <select className="w-1/3 px-1 py-2 " name="language" id="language">
     <option selected value="English">
      English
     </option>
    </select>
    <select className="w-1/3 px-1 py-2" name="country" id="country">
     <option selected value="United States">
      United States
     </option>
    </select>
   </form>
  </div>
 );
}
