import React from "react";

export default function SingUp() {
 return (
  <div className="basis-[30%] pb-[clamp(29px,4vw,64px)] text-xs lg:text-sm xl:text-base leading-5 lg:leading-6 xl:leading-7 order-first lg:order-none">
   <h4 className="font-bold">Sing up to our newsletter</h4>
   <p>
    Enter your email address to stay up to date with the latest offers,
    tutorials, downloads, surveys and more.
   </p>
   <form className="w-full flex mt-2 ">
    <input
     className="bg-zinc-100 grow px-2 py-1 text-sm"
     type="text"
     name="subscriptionEmail"
     id="subscriptionEmail"
     placeholder="Email Address"
    />
    <input
     className={`text-white bg-[#0000ff] px-4 text-sm font-bold`}
     type="submit"
     value="Sign up"
    />
   </form>
  </div>
 );
}
