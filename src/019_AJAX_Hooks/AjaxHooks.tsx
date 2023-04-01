import React, { useState, useEffect } from "react";
import { Classes } from "../assets/Classes";

//NOTE - CSS classes call
let classes = Classes();

//NOTE - TS interfaces section
interface PokemonProps {
 id: number | string;
 avatar: string;
 nombre: string;
}
interface APIResponse {
 name: string;
 url: string;
}

//NOTE - Functional Component Template
function Pokemon(props: PokemonProps): JSX.Element {
 return (
  <>
   <figure>
    <img src={props.avatar} title={props.nombre} />
    <figcaption>{props.nombre}</figcaption>
   </figure>
  </>
 );
}

//SECTION - Seccion principal
export default function AjaxHooks() {
 const [statePokemon, setStatePokemons] = useState<PokemonProps[]>([]);

 //LINK - Fetch Function
 async function getData(url: string) {
  let res = await fetch(url);
  let json = await res.json();
  let pokemons: PokemonProps[] = [];
  json.results.forEach(async (el: APIResponse) => {
   let res = await fetch(el.url);
   let json = await res.json();
   let pokemon = {
    nombre: json.name,
    avatar: json.sprites.front_default,
    id: json.id,
   };
   pokemons = [...pokemons, pokemon];
   setStatePokemons(pokemons);
  });
 }

 //NOTE - Use Effect when component is mounted
 useEffect(() => {
  //LINK - fetch function call
  getData("https://pokeapi.co/api/v2/pokemon/");
 }, []);

 return (
  <>
   <h2 className={classes.h2}>Peticiones Asincronas en Hooks</h2>
   {statePokemon.length === 0 ? (
    <h3 className={classes.text}>Cargando...</h3>
   ) : (
    statePokemon.map((el) => (
     <Pokemon
      id={el.id}
      nombre={el.nombre}
      avatar={el.avatar}
      key={el.nombre}
     />
    ))
   )}
  </>
 );
}
