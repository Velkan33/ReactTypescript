import React, { useContext, createContext } from 'react';
import { useImmerReducer } from 'use-immer';

interface Action {
 type: string;
 id?: number;
 name?: string;
 spaces?: {
  [val: number]: string;
 };
}
interface State {
 player1Name: string;
 player2Name: string;
 turnPlayer1: boolean;
 spaces: {
  [uno: number]: string;
 };
}

const initialState: State = {
 player1Name: '',
 player2Name: '',
 turnPlayer1: true,
 spaces: {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
 },
};
const MyDispatchContext = createContext<null | React.Dispatch<Action>>(null);
const MyStateContext = createContext<null | State>(null);

export function useMyDispatch() {
 const context = useContext(MyDispatchContext);
 if (context === undefined) {
  throw new Error('useMyDispatch must be used within a MyProvider');
 }
 return context;
}
export function useMyState() {
 const context = useContext(MyStateContext);
 if (context === undefined) {
  throw new Error('useMyState must be used within a MyProvider');
 }
 return context;
}
// LINK: Reducer
function MyReducer(draft: State, action: Action) {
 switch (action.type) {
  case 'Player1Click':
   {
    if (action.id === undefined) {
     return draft;
    }
    const myDraft = draft;

    myDraft.spaces[action.id] = 'X';
    myDraft.turnPlayer1 = false;
   }
   break;
  case 'Player2Click':
   {
    if (action.id === undefined) {
     return draft;
    }
    const myDraft = draft;
    myDraft.spaces[action.id] = 'O';
    myDraft.turnPlayer1 = true;
   }
   break;
  case 'Player1Name':
   {
    if (action.name === undefined) return draft;
    const myDraft = draft;
    myDraft.player1Name = action.name;
   }
   break;
  case 'Player2Name':
   {
    if (action.name === undefined) return draft;
    const myDraft = draft;
    myDraft.player2Name = action.name;
   }
   break;
  case 'Reset':
   {
    const myDraft = draft;
    myDraft.spaces = {
     0: '',
     1: '',
     2: '',
     3: '',
     4: '',
     5: '',
     6: '',
     7: '',
     8: '',
    };
    myDraft.turnPlayer1 = true;
   }
   break;
  case 'Back':
   {
    if (action.spaces === undefined) return draft;
    const myDraft = draft;
    myDraft.spaces = action.spaces;
    myDraft.turnPlayer1 = !myDraft.turnPlayer1;
   }
   break;
  default:
   return draft;
 }
}
export default function MyProvider({ children }: { children: JSX.Element }) {
 const [draft, dispatch] = useImmerReducer(MyReducer, initialState);
 return (
  <MyDispatchContext.Provider value={dispatch}>
   <MyStateContext.Provider value={draft}>{children}</MyStateContext.Provider>
  </MyDispatchContext.Provider>
 );
}
