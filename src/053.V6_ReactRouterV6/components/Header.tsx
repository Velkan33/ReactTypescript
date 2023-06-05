import React from 'react';
import viteLogo from '../../../public/vite.svg';
import reactLogo from '../../assets/react.svg';

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
  </div>
 );
}
