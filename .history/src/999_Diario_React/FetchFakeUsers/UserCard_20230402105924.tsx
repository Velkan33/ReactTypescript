import React from 'react';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 return (
  <div className="grid grid-flow-col h-40 border w-[20rem] mx-auto">
   <img src="" alt="userImg" />
   <div className="grid place-items-center">
    <p className="place-self-end">{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
