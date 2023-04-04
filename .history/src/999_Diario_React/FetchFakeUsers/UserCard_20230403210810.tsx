import React, { useRef } from 'react';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const myRef = useRef<null | React.Element>(null);
 const intersectionObserver = new IntersectionObserver(() => {});
 intersectionObserver.observe(myRef.current);

 return (
  <div className="grid grid-flow-col h-40 border w-[20rem] mx-auto" ref={myRef}>
   <img src="" alt="userImg" />
   <div className="grid place-items-center">
    <p className="">{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
