import React from 'react';
import viteLogo from '../../assets/vite.svg';
import reactLogo from '../../assets/react.svg';
import javascriptLogo from '../../assets/logo-javascript.svg';
import typescriptLogo from '../../assets/typescript-seeklogo.com.svg';

export default function Header() {
 return (
  <div>
   <img
    className="inline mx-1 hover:animate-[pulse_1s_infinite]"
    src={viteLogo}
    alt="viteLogo"
   />
   <img
    className="inline mx-1  animate-[spin_linear_6s_infinite] hover:animate-[spin_1s_infinite] "
    src={reactLogo}
    alt="reactLogo"
   />
   <img
    className="inline mx-1 max-h-[2.2rem] hover:animate-[pulse_1s_infinite] "
    src={javascriptLogo}
    alt="javascriptLogo"
   />
   <img
    className="inline mx-1 max-h-[2.2rem] hover:animate-[pulse_1s_infinite] "
    src={typescriptLogo}
    alt="typescriptLogo"
   />
  </div>
 );
}
