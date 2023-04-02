import React from 'react';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 return (
  <div>
   <img src="" alt="userImg" />
   <div>
    <p>{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
