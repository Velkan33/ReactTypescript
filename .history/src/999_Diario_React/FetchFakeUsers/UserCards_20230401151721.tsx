import React from 'react';
import useMyFetch from './useMyFetch';
import UserCard from './UserCard';

type SubResponse = { id: number; firstName: string; age: number };
function elementIsSubresponse(el: [] | SubResponse[]): el is SubResponse[] {
 return (el as SubResponse[]).length > 0;
}

export default function UserCards() {
 const responseArray = useMyFetch({ limit: 25, skip: 0 });
 if (responseArray.length === 0) return <div>NoResponse</div>;
 return;
 <div>
  {responseArray.map((el) => (
   <UserCard data={el} key={el.id} />
  ))}
 </div>;
}
