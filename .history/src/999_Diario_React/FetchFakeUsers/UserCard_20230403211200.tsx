import React, { useRef } from 'react';
import Message from './ErrorMessage';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const { id } = data;
 const myRef = useRef<null>(null);
 const intersectionObserver = new IntersectionObserver(() => {});
 // if (myRef.current === null) return <Message msg="El ref es Null" />;
 intersectionObserver.observe(document.querySelector(`#${dat}`));

 return (
  <div
   className="grid grid-flow-col h-40 border w-[20rem] mx-auto"
   ref={myRef}
   id={JSON.stringify(data.id)}
  >
   <img src="" alt="userImg" />
   <div className="grid place-items-center">
    <p className="">{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
