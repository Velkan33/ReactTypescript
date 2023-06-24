import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

interface Action {
 type: string;
 payload?: { result: State }[];
 query?: string;
}

interface State {
 title: string;
 artist_names: string | string[];
 header_image_thumbnail_url: string;
 header_image_url: string;
 id: number;
 release_date_for_display: string;
}
interface LastState {
 query: string;
 loading: boolean;
 state: State[];
}

const SongState = createContext<null | LastState>(null);
const SongDispatch = createContext<null | React.Dispatch<Action>>(null);

export const useMySongContext = () => {
 return useContext(SongState);
};
export const useMySongDispatch = () => {
 return useContext(SongDispatch);
};

function myReducer(draft: LastState, action: Action) {
 switch (action.type) {
  case 'ADD_SONG':
   {
    if (action.payload === undefined) return;
    const MyDraft = draft.state;
    const myResults = action.payload.map((value) => value.result);
    MyDraft.splice(0, MyDraft.length, ...myResults);
   }
   break;
  case 'ADD_QUERY':
   {
    if (action.query === undefined) return;
    const MyDraft = draft;
    MyDraft.query = action.query;
   }
   break;
  case 'ADD_LOADING':
   {
    const MyDraft = draft;
    MyDraft.loading = true;
   }
   break;
  case 'REMOVE_LOADING':
   {
    const MyDraft = draft;
    MyDraft.loading = false;
   }
   break;
  default: {
   console.log('default reducer');
  }
 }
}

export default function SongDispatcherReducer({
 children,
}: {
 children: JSX.Element;
}) {
 const [draft, dispatch] = useImmerReducer(myReducer, {
  query: '',
  loading: false,
  state: [],
 });

 return (
  <SongState.Provider value={draft}>
   <SongDispatch.Provider value={dispatch}>{children}</SongDispatch.Provider>
  </SongState.Provider>
 );
}
