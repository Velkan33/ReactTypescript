import React from 'react';
import useMyFetch from './useMyFetch';
import UserCard from './UserCard';
import { useMyState } from './ContextReducer';
import Message from './ErrorMessage';

type SubResponse = { id: number; firstName: string; age: number };
function elementIsSubresponseArr(el: [] | SubResponse[]): el is SubResponse[] {
 return (el as SubResponse[]).length > 0;
}

export default function UserCards() {
 const MyState = useMyState();
 if (MyState === null) return <Message msg="MyState is Null" />;
 const responseArray = MyState.data;
 if (!elementIsSubresponseArr(responseArray)) return <div>NoResponse</div>;
 return (
  <div className=" grid gap-8 py-8">
   {responseArray.map((el) => (
    <UserCard data={el} key={el.id} />
   ))}
  </div>
 );
}
