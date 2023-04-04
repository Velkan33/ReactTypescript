import React from 'react';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 return (
  <div className="grid h-40 border w-[20rem] mx-auto">
   <img src="" alt="userImg" />
   <div>
    <p>{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
