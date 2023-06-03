import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/**
All this section was to test if the ContextProvider works on react Router
* */
const MyContextState = React.createContext<{
 state: string;
 setState: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);
const useMyState = () => React.useContext(MyContextState);

function ContextProvider({ children }: { children: React.ReactNode }) {
 const [state, setState] = React.useState('(set name)');
 const statePack = React.useMemo(() => ({ state, setState }), [state]);
 return (
  <MyContextState.Provider value={statePack}>
   {children}
  </MyContextState.Provider>
 );
}

function About() {
 const statePack = useMyState();
 if (statePack === null) return <h2>Error en el state</h2>;
 const { state, setState } = statePack;
 setState('Kevin');
 return <h1>About {state}</h1>;
}
function Contact() {
 const statePack = useMyState();
 if (statePack === null) return <h2>Error en el state</h2>;
 const { state, setState } = statePack;
 setState('Velkan');
 return <h1>Contact {state}</h1>;
}
/* -- End of ContextProvider Section -- */

export default function ReactRouterV6Course() {
 const buttonStyle =
  'text-indigo-700 hover:underline underline-offset-[2px] hover:shadow-none shadow transition mt-1 ml-1 border font-normal rounded px-1';
 return (
  <BrowserRouter>
   <nav>
    <Link to="/">
     <button className={buttonStyle} type="button">
      Home
     </button>
    </Link>
    <Link to="/about">
     <button className={buttonStyle} type="button">
      About
     </button>
    </Link>
    <Link to="/contact">
     <button className={buttonStyle} type="button">
      Contact
     </button>
    </Link>
   </nav>
   <ContextProvider>
    <Routes>
     <Route path="" element={<h1>Home</h1>} />
     <Route path="about" element={<About />} />
     <Route path="contact" element={<Contact />} />
     <Route path="empty" element={<h2>Nothing to show</h2>} />
    </Routes>
   </ContextProvider>
  </BrowserRouter>
 );
}
