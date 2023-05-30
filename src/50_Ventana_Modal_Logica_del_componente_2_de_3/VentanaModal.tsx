import React from 'react';

export default function VentanaModal({
 closeModal,
 children,
}: {
 closeModal: React.MouseEventHandler<HTMLButtonElement>;
 children: JSX.Element;
}) {
 const marco = 'rounded-b overflow-hidden';
 const modalContainer = 'text-black';
 const modalClose =
  'rounded-full hover:bg-red-700 transition w-4 h-4 flex justify-center items-center  text-[25px] text-white bg-red-600 absolute -top-2 -right-2';
 const modal = 'text-black border max-w-[20rem] rounded mx-1 relative';
 return (
  <article className={modal}>
   <div className={modalContainer}>
    <button type="button" className={modalClose} onClick={closeModal}>
     <span className="absolute">&times;</span>
    </button>
    <div className={marco}>{children}</div>
   </div>
  </article>
 );
}
