import MenuBarButton from './MenuBarButton';
import { useMyState } from '../ReducerContext';
import MenuOne from './MenuOne';
import MenuTwoTest from './MenuTwoTest';
import useGetScreenWidth, {
 screenWidthCategories,
} from '../tools/useGetScreenWidth';
import MenuBarQuery from './MenuBarQuery';
import MenuBarQueryShort from './MenuBarQueryShort';
import SmallScreenMenuOne from './SmallScreenMenuOne';
import SmallScreenMenuButton from './SmallScreenMenuButton';
import MenuOptionsTemplate from './MenuOptionsTemplate';

export default function MenuBar() {
 const state = useMyState();
 const initialWidth = screenWidthCategories(window.innerWidth);
 const callbackWidth = useGetScreenWidth();
 const width = callbackWidth || initialWidth;

 if (!state) return <p>EmptyState</p>;
 const { menuOpen, categories } = state;
 const openStyle = 'fixed z-50  bg-black/75 inset-0  ';
 const closedStyle = 'fixed z-10 top-0 right-0 left-0';
 const cartHasItems =
  state.shoppingCart && Object.keys(state.shoppingCart).length > 0;
 const amountOfCartItems =
  state.shoppingCart && Object.keys(state.shoppingCart).length > 0
   ? Object.values(state.shoppingCart).reduce((total, value) => total + value)
   : 0;

 return (
  <div
   data-id="grayArea"
   className={menuOpen !== null && menuOpen !== 0 ? openStyle : closedStyle}
  >
   <div className="flex flex-col bg-white z-40 ">
    <div className="bg-white lg:shadow-md lg:shadow-black/25 flex lg:justify-start justify-between gap-6 px-4 py-2 items-center lg:h-16 h-12">
     {width !== 'xl' && <SmallScreenMenuButton />}
     {width !== 'xl' && categories && <SmallScreenMenuOne />}
     {width === 'xl' && (
      <div className="flex sm:order-2">
       <MenuBarButton textContent="Categories" id={1} />
       {categories && menuOpen !== null && (
        <MenuOptionsTemplate elemNumber={1}>
         <MenuOne />
        </MenuOptionsTemplate>
       )}

       <MenuBarButton textContent="Deals" id={2} />
       <MenuBarButton textContent="What's New" id={3} />
       {menuOpen !== null && <MenuTwoTest />}
       <MenuBarButton textContent="Essentials" id={4} />
      </div>
     )}
     <a
      href="http://www.google.com"
      className="grid place-items-center w-14 bg-white h-14 lg:order-1 order-2"
     >
      <div
       id="logo"
       className="bg-red-600 border border-black lg:h-3 h-2 w-2 lg:w-3 [box-shadow:0_0_0_7px_white_,_0_0_0_14px_#dc2626] "
      />
     </a>
     {width !== 'small' && width !== 'medium' && <MenuBarQueryShort />}
     <div className="order-3 relative flex">
      {amountOfCartItems > 0 && cartHasItems && (
       <div className="absolute px-[.30rem] py-[.05rem] rounded-full bg-[#cc0000] text-white text-[11px] -right-2 -top-2">
        {amountOfCartItems}
       </div>
      )}
      <span
       className="material-symbols-outlined  "
       style={{ fontSize: '30px' }}
      >
       shopping_cart
      </span>
     </div>
    </div>

    {(width === 'small' || width === 'medium') && <MenuBarQuery />}
   </div>
  </div>
 );
}
