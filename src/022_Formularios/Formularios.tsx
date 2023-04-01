import React, { useEffect, useState, useRef } from "react";
import { Classes } from "../assets/Classes";

interface MyState {
 nombre?: string;
 sabor?: string;
 lenguaje?: string;
 terminos?: boolean;
}

//NOTE - Version optima de formulario
/**REVIEW -  Info */
/** La diferencia es que en este modo optimo creamos un state "formulario el cual" */
/** sera un objeto que controlara cada cambio en el "form" y el evento "onChange" */
/** sera controlado con us spread operator el cual agnadira valores al objeto */
export default function Formularios(): JSX.Element {
 const [formulario, setFormulario] = useState<MyState>({});

 let handleChange: React.ChangeEventHandler<
  HTMLInputElement | HTMLSelectElement
 > = (e): void => {
  setFormulario({ ...formulario, [e.target.name]: e.target.value });
 };
 let handleChecked: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
  setFormulario({ ...formulario, [e.target.name]: e.target.checked });
 };

 let handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
  e.preventDefault();
  alert("El formulario se ha enviado");
 };

 let classes = Classes();
 return (
  <>
   <h1 className={classes.h2}>Formularios</h1>
   <form onSubmit={handleSubmit}>
    <label htmlFor="nombre">Nombre: </label>
    <input
     className={classes.textBlack}
     type="text"
     id="nombre"
     name="nombre"
     value={formulario.nombre}
     autoComplete="off"
     onChange={handleChange}
    />
    <br />
    <br />
    <p>Elige tu sabor favorito</p>
    <input
     type="radio"
     id="sabor0"
     name="sabor"
     value="Vanilla"
     onChange={handleChange}
     defaultChecked
    />
    <label htmlFor="sabor0">Vanilla</label>
    <input
     id="sabor1"
     type="radio"
     name="sabor"
     value="React"
     onChange={handleChange}
    />
    <label htmlFor="sabor1">React</label>
    <input
     id="sabor2"
     type="radio"
     name="sabor"
     value="Angular"
     onChange={handleChange}
    />
    <label htmlFor="sabor2">Angular</label>
    <input
     id="sabor3"
     type="radio"
     name="sabor"
     value="Vue"
     onChange={handleChange}
    />
    <label htmlFor="sabor3">Vue</label>
    <br />
    <br />
    <p>Elige tu lenguaje de programacion favorito</p>
    <select
     name="lenguage"
     className={classes.textBlack}
     onChange={handleChange}
     defaultValue=""
    >
     <option value="">- - -</option>
     <option value="js">JavaScript</option>
     <option value="php">PHP</option>
     <option value="py">Python</option>
     <option value="go">GO</option>
     <option value="rb">Ruby</option>
    </select>
    <br />
    <br />
    <label htmlFor="terminos">Acepto terminos y condiciones</label>

    <input
     type="checkbox"
     id="terminos"
     name="terminos"
     onChange={handleChecked}
    />
    <br />
    <br />
    <input
     className={classes.button + " !text-sm cursor-pointer"}
     type="submit"
    />
   </form>
  </>
 );
}

//NOTE - Version sencilla de formulario
// export default function Formularios(): JSX.Element {
//  const [nombre, setNombre] = useState<string>("");
//  const [sabor, setSabor] = useState<string>("");
//  const [lenguaje, setLenguaje] = useState<string>("");
//  const [terminos, setTerminos] = useState<boolean>(false);

//  let handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
//   setNombre(e.target.value);
//  };

//  let handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
//   e.preventDefault();
//   alert("El formulario se ha enviado");
//  };

//  let classes = Classes();
//  return (
//   <>
//    <h1 className={classes.h2}>Formularios</h1>
//    <form onSubmit={handleSubmit}>
//     <label htmlFor="nombre">Nombre: </label>
//     <input
//      className={classes.textBlack}
//      type="text"
//      id="nombre"
//      name="nombre"
//      value={nombre}
//      onChange={handleChange}
//     />
//     <br />
//     <br />
//     <p>Elige tu sabor favorito</p>
//     <input
//      type="radio"
//      id="sabor0"
//      name="sabor"
//      value="Vanilla"
//      onChange={(e) => {
//       setSabor(e.target.value);
//      }}
//      defaultChecked
//     />
//     <label htmlFor="sabor0">Vanilla</label>
//     <input
//      id="sabor1"
//      type="radio"
//      name="sabor"
//      value="React"
//      onChange={(e) => {
//       setSabor(e.target.value);
//      }}
//     />
//     <label htmlFor="sabor1">React</label>
//     <input
//      id="sabor2"
//      type="radio"
//      name="sabor"
//      value="Angular"
//      onChange={(e) => {
//       setSabor(e.target.value);
//      }}
//     />
//     <label htmlFor="sabor2">Angular</label>
//     <input
//      id="sabor3"
//      type="radio"
//      name="sabor"
//      value="Vue"
//      onChange={(e) => setSabor(e.target.value)}
//     />
//     <label htmlFor="sabor3">Vue</label>
//     <br />
//     <br />
//     <p>Elige tu lenguaje de programacion favorito</p>
//     <select
//      name="lenguage"
//      className={classes.textBlack}
//      onChange={(e) => {
//       setLenguaje(e.target.value);
//      }}
//      defaultValue=""
//     >
//      <option value="">- - -</option>
//      <option value="js">JavaScript</option>
//      <option value="php">PHP</option>
//      <option value="py">Python</option>
//      <option value="go">GO</option>
//      <option value="rb">Ruby</option>
//     </select>
//     <br />
//     <br />
//     <label htmlFor="terminos">Acepto terminos y condiciones</label>

//     <input
//      type="checkbox"
//      id="terminos"
//      name="terminos"
//      onChange={(e) => setTerminos(e.target.checked)}
//     />
//     <br />
//     <br />
//     <input
//      className={classes.button + " !text-sm cursor-pointer"}
//      type="submit"
//     />
//    </form>
//   </>
//  );
// }
