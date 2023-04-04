import React from 'react';
import UserCards from './UserCards';
import ContextReducer from './ContextReducer';

export default function UserFetchApp() {
 return (
  <ContextReducer>
   <div>
    <UserCards />
   </div>
  </ContextReducer>
 );
}
