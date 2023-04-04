import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Message from './ErrorMessage';
import { useMyDispatch, useMyState } from './ContextReducer';

type Response = {
 users: SubResponse[];
};
type SubResponse = { id: number; firstName: string; age: number };
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const { id } = data;
 const myState = useMyState();
 const myDispatch = useMyDispatch();
 const { ref, inView } = useInView({ threshold: 0 });
 if (myState === null) return <Message msg="MyState is Null" />;
 if (myDispatch === null) return <Message msg="MyDispatch is Null" />;
 const lastElement = myState.data.length === id;
 if (inView) {
  fetch(`https://dummyjson.com/users?limit=5&skip=${myState.data.length}`)
   .then((res) => {
    if (res.ok) {
     return res.json();
    }
    window.console.warn(res.status, res.statusText, res);
    return null;
   })
   .then((data: Response | null) => {
    if (data !== null) myDispatch({ type: 'More', data: data.users });
   });
  myDispatch({ type: 'More' });
 }

 return (
  <div
   className="grid grid-flow-col h-40 border w-[20rem] mx-auto"
   ref={lastElement ? ref : null}
  >
   <img src="" alt="userImg" />
   <div className="grid place-items-center">
    <p className="">{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
