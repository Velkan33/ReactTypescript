import React, { useRef, useEffect } from 'react';
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
 const length = myState ? myState.data.length : 0;

 useEffect(() => {
  let ignore = false;
  if (inView && myState !== null && !ignore) {
   console.log('onView');
   fetch(`https://dummyjson.com/users?limit=5&skip=${length}`)
    .then((res) => {
     if (res.ok) {
      return res.json();
     }
     window.console.warn(res.status, res.statusText, res);
     return null;
    })
    .then((response: Response | null) => {
     if (response !== null && myDispatch !== null)
      myDispatch({ type: 'More', data: response.users });
    });
  } else {
   console.log('hidden');
  }
  return () => {
   ignore = true;
  };
 }, [inView, myDispatch]);
 if (myState === null) return <Message msg="MyState is Null" />;
 if (myDispatch === null) return <Message msg="MyDispatch is Null" />;
 const lastElement = myState.data.length === id;

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
