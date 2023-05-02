import { Fragment } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import categoriesProductFetch from '../tools/categoriesProductFetch';

export default function MenuOneSmall() {
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
   <h4
    className="text-start sm:text-md text-lg font-bold py-3 mt-1 mx-4"
    data-id="menuButton"
   >
    All Categories
   </h4>

   {categories.map((el) => (
    <Fragment key={el}>
     <hr className="mx-4 h-0" data-id="menuButton" />
     <button
      type="button"
      className=" text-start sm:text-md text-lg relative block py-2 w-full px-4 hover:bg-gray-200/50 hover:font-bold"
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
