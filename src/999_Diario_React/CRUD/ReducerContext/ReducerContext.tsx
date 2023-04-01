import { createContext, useContext, useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import useMyFetch from '../utils/Fetch';
import myInterFetch from '../utils/InteractiveFetch';

interface IState {
 nombre: string;
 constelacion: string;
 id: number;
}
type IDraft = boolean;
interface IAction {
 type: string;
 id: number;
}

const MyStateContext = createContext<null | IState[]>(null);
const MyDispatchContext = createContext<null | React.Dispatch<IAction>>(null);

export const useStateContext = () => useContext(MyStateContext);
export const useDispatchContext = () => useContext(MyDispatchContext);

const myReducer = (draft: IDraft, action: IAction) => {
 switch (action.type) {
  case 'ADD':
   return !draft;
   break;
  case 'DELETE':
   myInterFetch({
    url: `http://localhost:6655/santos/${action.id}`,
    method: 'DELETE',
   });
   return !draft;

  default:
   return draft;
 }
};

export default function ReducerContext({
 children,
}: {
 children: JSX.Element;
}) {
 const [state, dispatch] = useImmerReducer(myReducer, false);
 const { data, loading, fetchData } = useMyFetch({
  url: 'http://localhost:6655/santos',
 });
 useEffect(() => {
  let read = true;
  if (read) {
   fetchData();
   console.log(`lo lei ${state}`);
  }
  return () => {
   read = false;
   console.log(`I stop reading it ${state}`);
  };
 }, [state, fetchData]);

 if (loading) return <div>loading ...</div>;
 return (
  <MyStateContext.Provider value={data}>
   <MyDispatchContext.Provider value={dispatch}>
    {children}
   </MyDispatchContext.Provider>
  </MyStateContext.Provider>
 );
}
