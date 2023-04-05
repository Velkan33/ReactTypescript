import React from 'react';
import UserCard from './UserCard';
import { useMyState } from './ContextReducer';
import Message from './ErrorMessage';

type SubResponse = {
 id: number;
 firstName: string;
 age: number;
 image: string;
 username: string;
};
function elementIsSubresponseArr(el: [] | SubResponse[]): el is SubResponse[] {
 return (el as SubResponse[]).length > 0;
}

export default function UserCards() {
 const MyState = useMyState();
 const responseArray = MyState.data;
 if (MyState === null) return <Message msg="MyState is Null" />;
 if (!elementIsSubresponseArr(responseArray))
  return <Message msg="No response" />;
 return (
  <div className=" grid gap-8 py-8">
   {responseArray.map((el) => {
    return <UserCard data={el} key={el.id} />;
   })}
  </div>
 );
}
