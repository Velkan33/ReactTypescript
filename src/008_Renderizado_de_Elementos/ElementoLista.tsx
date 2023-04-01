import data from "./helpers/data.json";

//SECTION - Exporto el componente que tiene el contenido del data.json en forma de "li"
//SECTION - JON pasa los parametros mediante "PROPS" pero yo decidi importar la data directamente aqui de tal manera que es autocontenido sin depender del paso de parametros
export default function ElementoLista() {
 let text = " text-xl";
 let list = " list-disc my-2 list-inside";
 let link = " text-purple-400";
 return (
  <div>
   <ul className={list + text}>
    {data.frameworks.map((el) => (
     <li key={el.id}>
      <a className={link} href={el.web} target="_blank" rel="noopener">
       {el.name}
      </a>
     </li>
    ))}
   </ul>
  </div>
 );
}
