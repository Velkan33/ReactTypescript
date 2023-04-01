import React from "react";

export default function FinalLinks() {
 return (
  <div className="flex lg:flex-row flex-col font-bold text-xs lg:justify-between mx-[8.3%] ">
   <div className="flex gap-4 mb-[min(8vw,133px)] flex-col lg:flex-row">
    <a>Contact Us</a>
    <a href="#">Press Resources</a>
    <a href="#">Legal Info</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Cookie Settings</a>
    <a href="#">Imprint</a>
   </div>
   <div className="flex gap-4 mb-[min(8vw,133px)]">
    <p>Made in Berlin</p>
    <img className="order-first lg:order-last" alt="logo" />
   </div>
  </div>
 );
}
