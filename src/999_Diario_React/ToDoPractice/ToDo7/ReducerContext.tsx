import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

interface TaskElement {
 id: number;
 task: string;
 completed: boolean;
}
interface Action {
 type: string;
 id?: number;
 task?: string;
}
const initialState: TaskElement[] = [
 { id: 1, task: 'Task 1', completed: false },
];

const MyStateContext = createContext<null | TaskElement[]>(null);
const MyDistpatchContext = createContext<null | React.Dispatch<Action>>(null);

export const useStateProvider = () => {
 return useContext(MyStateContext);
};
export const useDispatchProvider = () => {
 return useContext(MyDistpatchContext);
};
// --------- Reducer
function MyReducer(draft: TaskElement[], action: Action) {
 switch (action.type) {
  case 'Add':
   if (typeof action.id !== 'number' || typeof action.task !== 'string') {
    return draft;
   }
   return [...draft, { id: action.id, task: action.task, completed: false }];
   break;
  case 'Delete':
   return draft.filter((task) => task.id !== action.id);
   break;
  case 'Toggle':
   {
    const element = draft.find((el) => el.id === action.id);
    if (!element) return draft;
    element.completed = !element.completed;
   }
   break;
  case 'Edit':
   {
    const element = draft.find((el) => el.id === action.id);
    if (!element) return draft;
    if (typeof action.task === 'string') element.task = action.task;
   }
   break;
  default:
   return draft;
 }
}
// ----------  Context Provider
export default function ContextProvider({
 children,
}: {
 children: JSX.Element;
}) {
 const [draft, dispatch] = useImmerReducer(MyReducer, initialState);

 return (
  <MyStateContext.Provider value={draft}>
   <MyDistpatchContext.Provider value={dispatch}>
    {children}
   </MyDistpatchContext.Provider>
  </MyStateContext.Provider>
 );
}
