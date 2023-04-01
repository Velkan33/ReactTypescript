import React from "react";
import Community from "./footer/Community";
import Distributors from "./footer/Distributors";
import Education from "./footer/Education";
import FinalLinks from "./footer/FinalLinks";
import Language from "./footer/Language";
import SingUp from "./footer/SingUp";
import SocialMedia from "./footer/SocialMedia";
import Title from "./footer/Title";

export default function Footer() {
 return (
  <>
   <Title />
   <div
    className={`flex mx-[8.3%] lg:mb-[8.3%] mb-0 flex-wrap flex-col lg:flex-row`}
   >
    <SocialMedia />
    <Education />
    <SingUp />
    <Community />
    <Distributors />
    <Language />
   </div>
   <FinalLinks />
  </>
 );
}
