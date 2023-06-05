import { useMyState } from '../context/ContextProvider';

export default function About() {
 const statePack = useMyState();
 if (statePack === null) return <h2>Error en el state</h2>;
 const { state, setState } = statePack;
 setState('Kevin');
 return <h1>About {state}</h1>;
}
