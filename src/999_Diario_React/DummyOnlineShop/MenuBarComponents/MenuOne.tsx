import { Fragment } from 'react';
import { useMyDispatch, useMyState } from '../ReducerContext';
import MenuOptionsTemplate from './MenuOptionsTemplate';

export default function MenuOne() {
 const state = useMyState();
 const dispatch = useMyDispatch();
 if (state === null || dispatch === null) return <div>Error with Context</div>;
 const { categories } = state;
 const handleCategoriesClick = (el: string) => {
  dispatch({ type: 'CLEAR_MENU_OPEN' });
  dispatch({ type: 'SET_LOADING' });
  console.log(el);
  fetch(`https://dummyjson.com/products/category/${el}`)
   .then((res) => res.json())
   .then((json) => {
    console.log(json);
    dispatch({ type: 'CREATE_PRODUCTS', data: json.products });
    dispatch({ type: 'CLEAR_LOADING' });
   });
 };
 return (
  <MenuOptionsTemplate elemNumber={1}>
   <>
    <h4
     className="text-start text-md font-bold py-3 mt-1 mx-4"
     data-id="menuButton"
    >
     All Categories
    </h4>

    {categories.map((el) => (
     <Fragment key={el}>
      <hr className="mx-4 h-0" data-id="menuButton" />
      <button
       type="button"
       className=" text-start relative block py-2 w-full px-4 hover:bg-gray-200/50 hover:font-bold"
       data-id="menuButton"
       onClick={() => handleCategoriesClick(el)}
      >
       {el.charAt(0).toUpperCase() + el.slice(1)}
      </button>
     </Fragment>
    ))}
   </>
  </MenuOptionsTemplate>
 );
}
