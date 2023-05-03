import { Fragment } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import categoriesProductFetch from '../tools/categoriesProductFetch';
import defaultFetch from '../tools/defaultFetch';

export default function MenuOne() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 if (state === null || dispatch === null) return <div>Error with Context</div>;
 const { categories } = state;
 const handleCategoriesClick = (el: string) => {
  window.location.hash = el;
  categoriesProductFetch(dispatch, el);
 };
 return (
  <>
   <button
    type="button"
    className="hover:underline underline-offset-2 text-start sm:text-md text-lg font-bold py-3 mt-1 px-4 w-full  hover:bg-gray-200/50 "
    data-id="menuButton"
    onClick={() => {
     window.location.hash = '';
     defaultFetch(dispatch);
    }}
   >
    All Categories
   </button>

   {categories.map((el) => (
    <Fragment key={el}>
     <hr className="mx-4 h-0" data-id="menuButton" />
     <button
      type="button"
      className="text-start sm:text-md text-lg relative block py-2 w-full px-4 hover:bg-gray-200/50 hover:font-bold hover:underline hover:underline-offset-2 font-normal"
      data-id="menuButton"
      onClick={() => handleCategoriesClick(el)}
     >
      {el.charAt(0).toUpperCase() + el.slice(1)}
     </button>
    </Fragment>
   ))}
  </>
 );
}
