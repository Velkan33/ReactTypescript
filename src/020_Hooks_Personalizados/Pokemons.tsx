interface PokemonProps {
 id?: number | string;
 avatar?: string;
 nombre: string;
}
export function Pokemon(props: PokemonProps) {
 let stylePoke = {};
 return (
  <figure className="flex flex-col bg-slate-700 w-32 text-center">
   {/* <img src={props.avatar} alt={props.nombre} /> */}
   <figcaption>{props.nombre}</figcaption>
  </figure>
 );
}
