import { Fragment } from 'react';

export default function MenuOne({ data }: { data: string[] }) {
 return (
  <>
   <h4
    className="text-start text-md font-bold py-3 mt-1 mx-4"
    data-id="menuButton"
   >
    All Categories
   </h4>

   {data.map((el) => (
    <Fragment key={el}>
     <hr className="mx-4 h-0" data-id="menuButton" />
     <button
      type="button"
      className=" text-start relative block py-2 w-full px-4"
      data-id="menuButton"
     >
      {el.charAt(0).toUpperCase() + el.slice(1)}
     </button>
    </Fragment>
   ))}
  </>
 );
}
