import React from 'react';
import useMyFetch from './useMyFetch';

export default function UserCards() {
 const responseArray = useMyFetch();
 return {
  /** responseArray.map(el => <UserCard data={el} key={el.key}/>) */
 };
}
