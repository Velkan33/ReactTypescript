import React from 'react';
import lodash from 'lodash';
//* * In this function we update the localStorage with the shopping cart */
export default function manageCart(parameters: {
 type: string;
 id?: string | number;
 amount?: number;
 price?: number;
 thumbnail?: string;
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
    const objectCopy = lodash.cloneDeep(localStorageObject);
    const isOnCart = objectCopy.products.find(
     (elem: { id: number | string }) => elem.id === parameters.id
    );
    if (!isOnCart) {
     objectCopy.products.push({
      id: parameters.id,
      amount: 1,
      price: parameters.price,
      thumbnail: parameters.thumbnail,
     });
    } else {
     isOnCart.amount = parameters.amount;
    }
    const stringifyData = JSON.stringify(objectCopy);
    window.localStorage.setItem('shopping_cart', stringifyData);
   }
   break;
  case 'REMOVE_ITEM_ID':
   {
    if (!parameters.id) break;
    const objectCopy = lodash.cloneDeep(localStorageObject);
    objectCopy.products = objectCopy.products.filter(
     (elem: { id: string | number }) => elem.id !== parameters.id
    );
    const stringifyData = JSON.stringify(objectCopy);
    window.localStorage.setItem('shopping_cart', stringifyData);
   }
   break;
  case 'SET_CART':
   {
    const stringifyEmptyArray = JSON.stringify({ products: [] });
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
