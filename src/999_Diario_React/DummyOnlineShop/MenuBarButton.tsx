import React, { Fragment, useEffect } from 'react';
import MenuOne from './MenuOne';

export default function MenuBarButton({
 textContent,
 data,
 menuOpen,
 setMenuOpen,
 id,
}: {
 textContent: string;
 data?: string[];
 menuOpen: number;
 setMenuOpen: React.Dispatch<number>;
 id: number;
}) {
 useEffect(() => {
  function MyEvent(e: MouseEvent) {
   const { target } = e;
   if ((target as HTMLButtonElement).dataset.id === 'menuButton') return;
   setMenuOpen(0);
  }
  document.addEventListener('click', MyEvent);

  return () => {
   document.removeEventListener('click', MyEvent);
  };
 }, [setMenuOpen, id, menuOpen]);
 const handleInteraction = () => {
  setMenuOpen(menuOpen === id ? 0 : id);
 };

 return (
  <div>
   <button
    type="button"
    data-id="menuButton"
    className="bg-white text-gray-700 hover:text-black hover:bg-gray-100/75 px-3  py-2 rounded-md  my-2 active:outline-[1px] active:outline-dashed active:outline-black  text-center"
    onClick={handleInteraction}
    onKeyDown={handleInteraction}
   >
    {textContent}
   </button>
   {data && menuOpen !== 0 && (
    <div className="w-screen h-screen absolute block top-16 left-0 border -z-10">
     <div className="grid w-80 mx-20 bg-white text-sm font-normal  h-80 overflow-y-scroll">
      {menuOpen === 1 && <MenuOne data={data} />}
     </div>
    </div>
   )}
  </div>
 );
}

MenuBarButton.defaultProps = {
 data: undefined,
};
