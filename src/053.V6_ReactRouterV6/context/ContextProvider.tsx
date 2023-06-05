import React from 'react';

/**
All this section was to test if the ContextProvider works on react Router
* */
const MyContextState = React.createContext<{
 state: string;
 setState: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);
export const useMyState = () => React.useContext(MyContextState);

export default function ContextProvider({
 children,
}: {
 children: React.ReactNode;
}) {
 const [state, setState] = React.useState('(set name)');
 const statePack = React.useMemo(() => ({ state, setState }), [state]);
 return (
  <MyContextState.Provider value={statePack}>
   {children}
  </MyContextState.Provider>
 );
}

/* -- End of ContextProvider Section -- */
