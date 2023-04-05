import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Message from './ErrorMessage';
import { useMyDispatch, useMyState } from './ContextReducer';

type Response = {
 users: SubResponse[];
};
type SubResponse = {
 id: number;
 firstName: string;
 age: number;
 image: string;
 username: string;
};
export default function UserCard({ data }: { data: SubResponse }) {
 const { firstName } = data;
 const { id } = data;
 const { image } = data;
 const { username } = data;
 const myState = useMyState();
 const myDispatch = useMyDispatch();
 const { ref, inView } = useInView({ threshold: 0 });

 useEffect(() => {
  let ignore = false;
  if (inView && !ignore) {
   console.log('onView');
   fetch(`https://dummyjson.com/users?limit=5&skip=${id}`)
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
  }

  return () => {
   ignore = true;
  };
 }, [inView, myDispatch, id]);
 if (myState === null) return <Message msg="MyState is Null" />;
 if (myDispatch === null) return <Message msg="MyDispatch is Null" />;
 const lastElement = myState.data.length === id;

 return (
  <div
   className="grid grid-flow-col auto-cols-fr h-40 border w-[20rem] mx-auto"
   ref={lastElement ? ref : null}
  >
   <div className="overflow-hidden">
    <img className="w-full " src={image} alt="userImg" />
   </div>
   <div className="grid place-items-center border-l border-gray-400/50">
    <p className="">{firstName}</p>
    <p>{username}</p>
   </div>{' '}
  </div>
 );
}
