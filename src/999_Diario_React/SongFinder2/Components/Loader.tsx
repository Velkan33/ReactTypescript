import React from 'react';
import '../Styles/loader.css';

export default function Loader({ center }: { center?: boolean }) {
 const style = `lds-facebook md:ml-auto ml-[50%] md:translate-x-0 translate-x-[-50%] block md:inline `;
 const style2 = `lds-facebook left-[50%] -translate-x-[50%] mt-[20vh]`;
 return (
  <div className={center ? style2 : style}>
   <div />
   <div />
   <div />
  </div>
 );
}
Loader.defaultProps = { center: false };
