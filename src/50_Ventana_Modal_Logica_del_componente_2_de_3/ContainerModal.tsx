import React, { useState } from 'react';
import VentanaModal from './VentanaModal';

function ModalButton({
 modalNumber,
 toggleModal,
}: {
 modalNumber: number;
 toggleModal: React.MouseEventHandler<HTMLButtonElement>;
}) {
 return (
  <button
   onClick={toggleModal}
   type="button"
   className="border rounded px-1 shadow mx-1 my-2"
  >{`Modal ${modalNumber}`}</button>
 );
}
// Un custom Hook para practicar
function useOpen(initialState: boolean) {
 const [isOpen, setIsOpen] = useState<boolean>(initialState);
 const toggleModal = () => setIsOpen(!isOpen);
 return [isOpen, toggleModal];
}
// Componente principal
export default function ContainerModal2() {
 const [isOpen1, toggleModal1] = useOpen(false);
 const [isOpen2, toggleModal2] = useOpen(false);

 const modalHeader = ' px-1 text-lg';
 const modalText = ' text-xs px-1 py-1';

 return (
  <div className="font-normal ">
   <h2>Modales</h2>
   <ModalButton modalNumber={1} toggleModal={toggleModal1 as () => void} />
   <ModalButton modalNumber={2} toggleModal={toggleModal2 as () => void} />
   {isOpen1 && (
    <VentanaModal closeModal={toggleModal1 as () => void}>
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
   {isOpen2 && (
    <VentanaModal closeModal={toggleModal2 as () => void}>
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
