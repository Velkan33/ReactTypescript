import React from 'react';
//* * In this function we update the localStorage with the shopping cart */
export default function manageCart(parameters: {
 type: string;
 id?: string | number;
 amount?: number;
}) {
 const localStorageObject =
  window.localStorage.getItem('shopping_cart') !== null
   ? JSON.parse(window.localStorage.getItem('shopping_cart') as string)
   : null;

 switch (parameters.type) {
  case 'ADD_ITEM_ID':
   {
    if (!parameters.id) break;
    // if (localStorageObject[parameters.id]) break;
    const data = {
     ...localStorageObject,
     [parameters.id]: parameters.amount || 1,
    };
    const stringifyData = JSON.stringify(data);
    window.localStorage.setItem('shopping_cart', stringifyData);
   }
   break;
  case 'REMOVE_ITEM_ID':
   {
    if (!parameters.id) break;
    console.log(localStorageObject);
    const objectCopy = { ...localStorageObject };
    delete objectCopy[parameters.id];

    // arrayCopy.filter((elem) => elem !== parameters.id);

    // const data = {
    //  ...localStorageObject,
    //  id: myNextObject,
    // };
    const stringifyData = JSON.stringify(objectCopy);
    window.localStorage.setItem('shopping_cart', stringifyData);
   }
   break;
  case 'SET_CART':
   {
    const stringifyEmptyArray = JSON.stringify({});
    const shoppingCartExist =
     window.localStorage.getItem('shopping_cart') !== null;
    if (shoppingCartExist) break;
    window.localStorage.setItem('shopping_cart', stringifyEmptyArray);
   }
   break;

  default:
   break;
 }
}