import MenuBarButton from './MenuBarButton';
import { useMyState } from '../ReducerContext';
import MenuOne from './MenuOne';
import MenuTwoTest from './MenuTwoTest';

export default function MenuBar() {
 const state = useMyState();
 if (!state) return <p>EmptyState</p>;
 const { menuOpen, categories } = state;
 const openStyle = 'fixed z-50  bg-gray-300/50 inset-0  ';
 const closedStyle = 'sticky z-50 inset-0';
 return (
  <div
   data-id="grayArea"
   className={
    menuOpen !== null && menuOpen.length > 0 ? openStyle : closedStyle
   }
  >
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
    <MenuBarButton textContent="Categories" id={1} />
    {categories && menuOpen !== null && <MenuOne />}
    <MenuBarButton textContent="Deals" id={2} />
    <MenuBarButton textContent="What's New" id={3} />
    {menuOpen !== null && <MenuTwoTest />}
    <MenuBarButton textContent="Essentials" id={4} />
   </div>
  </div>
 );
}
