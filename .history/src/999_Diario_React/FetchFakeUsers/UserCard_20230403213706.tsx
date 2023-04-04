import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Message from './ErrorMessage';
import { useMyState } from './ContextReducer';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const { id } = data;
 const myState = useMyState();
 const myRef = useRef(null);
 const { myRef, inView } = useInView({ threshold: 0 });
 if (myState === null) return <Message msg="MyState is Null" />;

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
