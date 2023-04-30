import React from 'react';

export default function manageCart(parameters: {
 type: string;
 id?: string | number;
}) {
 const localStorageObject =
  window.localStorage.getItem('shopping_cart') !== null
   ? JSON.parse(window.localStorage.getItem('shopping_cart') as string)
   : null;

 switch (parameters.type) {
  case 'ADD_ITEM_ID':
   {
    if (!parameters.id) break;
    if (localStorageObject[parameters.id]) break;
    const data = {
     ...localStorageObject,
     [parameters.id]: 1,
    };
    const stringifyData = JSON.stringify(data);
    window.localStorage.setItem('shopping_cart', stringifyData);
    // TODO -- Aqui tengo que hacer el dispatch al state
   }
   break;
  case 'REMOVE_ITEM_ID':
   {
    if (!parameters.id) break;
    const arrayCopy = [...localStorageObject.id];
    const myNextArray = arrayCopy.filter((elem) => elem !== parameters.id);
    const data = {
     ...localStorageObject,
     id: myNextArray,
    };
    const stringifyData = JSON.stringify(data);
    window.localStorage.setItem('shopping_cart', stringifyData);
   }
   break;
  case 'SET_CART':
   {
    const stringifyEmptyArray = JSON.stringify({});
    const shoppingCartExist =
     window.localStorage.getItem('shopping_cart') !== undefined;
    if (shoppingCartExist) break;
    window.localStorage.setItem('shopping_cart', stringifyEmptyArray);
   }
   break;

  default:
   break;
 }
}
