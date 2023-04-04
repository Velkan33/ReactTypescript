import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Message from './ErrorMessage';
import { useMyState } from './ContextReducer';

type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const { id } = data;
 const myState = useMyState();
 const { ref, inView } = useInView({ threshold: 0 });
 if (myState === null) return <Message msg="MyState is Null" />;
 const lastElement = myState.data.length;

 return (
  <div className="grid grid-flow-col h-40 border w-[20rem] mx-auto" ref={ref}>
   <img src="" alt="userImg" />
   <div className="grid place-items-center">
    <p className="">{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
