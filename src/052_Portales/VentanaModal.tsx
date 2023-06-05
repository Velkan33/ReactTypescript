import React, { useRef, useEffect } from 'react';

export default function VentanaModal({
 closeModal,
 children,
}: {
 closeModal: CallableFunction;
 children: JSX.Element;
}) {
 const myRef = useRef(null);
 useEffect(() => {
  function close(e: MouseEvent) {
   if (e.target === myRef.current) {
    closeModal();
   }
  }

  document.addEventListener('click', close);

  return () => {
   document.removeEventListener('click', close);
  };
 });

 const marco = 'rounded-b overflow-hidden';
 const modalContainer = ' max-w-[20rem] text-black  bg-white rounded relative';
 const modalClose =
  'rounded-full hover:bg-red-700 transition w-4 h-4 flex justify-center items-center  text-[25px] text-white bg-red-600 absolute -top-2 -right-2';
 const modal =
  'bg-black/50 fixed top-0 grid place-items-center h-screen w-screen';
 return (
  <div className={modal} ref={myRef}>
   <div className={modalContainer}>
    <button type="button" className={modalClose} onClick={() => closeModal()}>
     <span className="absolute">&times;</span>
    </button>
    <div className={marco}>{children}</div>
   </div>
  </div>
 );
}
