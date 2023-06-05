import { useMyState } from '../context/ContextProvider';

export default function Contact() {
 const statePack = useMyState();
 if (statePack === null) return <h2>Error en el state</h2>;
 const { state, setState } = statePack;
 setState('Velkan');
 return <h1>Contact {state}</h1>;
}
