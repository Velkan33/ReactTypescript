import React from 'react';
import useMyFetch from './useMyFetch';
import UserCard from './UserCard';

function elementIsSubresponse(el:[]|Subresponse[]): el is Subresponse[]{
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
