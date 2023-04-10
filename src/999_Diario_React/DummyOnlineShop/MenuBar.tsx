import React, { useState } from 'react';
import MenuBarButton from './MenuBarButton';
import { useMyState } from './ReducerContext';

export default function MenuBar() {
 const [menuOpen, setMenuOpen] = useState<number>(0);
 const state = useMyState();
 if (!state) return <p>EmptyState</p>;
 const openStyle = 'fixed z-50  bg-gray-300/50 inset-0 ';
 const closedStyle = 'sticky z-50 top-0';
 return (
  <div className={menuOpen ? openStyle : closedStyle}>
   <div className="bg-white shadow-md shadow-black/25 flex gap-2 px-4 py-2 items-center z-40 h-16">
    <a
     href="http://www.google.com"
     className="grid place-items-center w-14 bg-white h-14"
    >
     <div
      id="logo"
      className="bg-red-600 rounded-[50%] h-3 w-3 [box-shadow:0_0_0_7px_white_,_0_0_0_14px_#dc2626] "
     />
    </a>
    <MenuBarButton
     textContent="Categories"
     data={state.categories}
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
     id={1}
    />
    <MenuBarButton
     textContent="Deals"
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
     id={2}
    />
    <MenuBarButton
     textContent="What's New"
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
     id={3}
    />
    <MenuBarButton
     textContent="Essentials"
     menuOpen={menuOpen}
     setMenuOpen={setMenuOpen}
     id={4}
    />
   </div>
  </div>
 );
}
