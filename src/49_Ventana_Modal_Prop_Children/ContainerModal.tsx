import React, { useState } from 'react';
import VentanaModal from './VentanaModal';

function ModalButton({
 modalNumber,
 open,
 setOpen,
}: {
 modalNumber: number;
 open: number | null;
 setOpen: React.Dispatch<React.SetStateAction<null | number>>;
}) {
 function handleOpen(number: number) {
  if (open !== number) {
   setOpen(number);
  } else {
   setOpen(null);
  }
 }
 return (
  <button
   onClick={() => handleOpen(modalNumber)}
   type="button"
   className="border rounded px-1 shadow mx-1 my-2"
  >{`Modal ${modalNumber}`}</button>
 );
}

export default function ContainerModal() {
 const [open, setOpen] = useState<null | number>(null);
 const modalHeader = ' px-1 text-lg';
 const modalText = ' text-xs px-1 py-1';

 return (
  <div className="font-normal ">
   <h2>Modales</h2>
   <ModalButton modalNumber={1} open={open} setOpen={setOpen} />
   <ModalButton modalNumber={2} open={open} setOpen={setOpen} />
   {open === 1 && (
    <VentanaModal setOpen={setOpen}>
     <>
      <h3 className={modalHeader}>Contenido de Modal 1</h3>
      <p className={modalText}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
       autem quos ab cupiditate fugiat, adipisci laborum vero expedita quas
       magnam.
      </p>
      <img
       src="https://placeimg.com/400/400/animals"
       alt="Animals"
       key="animals"
      />
     </>
    </VentanaModal>
   )}
   {open === 2 && (
    <VentanaModal setOpen={setOpen}>
     <>
      <h3 className={modalHeader}>Contenido de Modal 2</h3>
      <p className={modalText}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
       consequatur nihil ratione nulla sit minus dolores similique harum error
       in.
      </p>
      <img
       src="https://placeimg.com/400/400/nature"
       alt="Nature"
       key="nature"
      />
     </>
    </VentanaModal>
   )}
  </div>
 );
}
