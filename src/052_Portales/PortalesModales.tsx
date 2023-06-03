// Aqui usaremos los portales
// Se coloca el ReactDOM.createPortal luego del return y se le pasa, primero el componente, luego el elemento en el que se insertara, y por ultimo una key opcional.
import ReactDOM from 'react-dom';
import React, { useRef, useEffect } from 'react';

export default function PortalesModales({
 closeModal,
 children,
}: {
 closeModal: () => void;
 children: JSX.Element;
}) {
 const myRef = useRef(null);
 useEffect(() => {
  function close(e: MouseEvent) {
   if (e.target === myRef.current) {
    closeModal();
    console.log('listener de cerrar ventana modal en click on gray area');
   }
  }

  document.addEventListener('click', close);

  return () => {
   document.removeEventListener('click', close);
   console.log('eliminado el listener');
  };
 });

 const marco = 'rounded-b overflow-hidden';
 const modalContainer = ' max-w-[20rem] text-black  bg-white rounded relative';
 const modalClose =
  'rounded-full hover:bg-red-700 transition w-4 h-4 flex justify-center items-center  text-[25px] text-white bg-red-600 absolute -top-2 -right-2';
 const modal =
  'bg-black/50 fixed top-0 grid place-items-center h-screen w-screen';
 // Se coloca el ReactDOM.createPortal luego del return y se le pasa, primero el componente, luego el elemento en el que se insertara, y por ultimo una key opcional.
 return ReactDOM.createPortal(
  <article className={modal} ref={myRef}>
   <div className={modalContainer}>
    <button type="button" className={modalClose} onClick={() => closeModal()}>
     <span className="absolute">&times;</span>
    </button>
    <div className={marco}>{children}</div>
   </div>
  </article>,
  document.getElementById('modal') as HTMLElement,
  'portal'
 );
}
