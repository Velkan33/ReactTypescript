import React from 'react';

export default function posibleAmountToBuy(price: number) {
 const arrayToReturn = [];
 if (price < 100) {
  for (let y = 0; y <= 8; y += 1) {
   arrayToReturn.push(y);
  }
 } else if (price >= 100 && price < 1000) {
  for (let y = 0; y <= 4; y += 1) {
   arrayToReturn.push(y);
  }
 } else if (price >= 1000) {
  for (let y = 0; y <= 2; y += 1) {
   arrayToReturn.push(y);
  }
 }
 return arrayToReturn;
}
