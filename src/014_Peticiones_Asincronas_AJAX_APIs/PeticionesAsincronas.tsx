import React, { Component } from "react";
import { Classes } from "../assets/Classes";
import { ContenidoLesson } from "./ContenidoLesson";

interface MyProps {}
interface MyState {
 pokemons: { nombre: string; avatar: string }[];
}
interface PokemonProps {
 id: number | string;
 avatar: string;
 nombre: string;
}
interface APIResponse {
 name: string;
 url: string;
}
//NOTE - Cards a insertar en el DOM
function Pokemon(props: PokemonProps) {
 let stylePoke = {};
 return (
  <figure className="flex flex-col bg-slate-700 w-32 text-center">
   <img src={props.avatar} alt={props.nombre} />
   <figcaption>{props.nombre}</figcaption>
  </figure>
 );
}

export class PeticionesAsincronas extends Component<MyProps, MyState> {
 state = { pokemons: [] };

 //NOTE - Esperar que se monte el componente
 componentDidMount(): void {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  //NOTE - Peticion FETCH
  fetch(url)
   .then((res) => (res.ok ? res.json() : Promise.reject(res)))
   .then((json: { results: APIResponse[] }) => {
    let pokemons: PokemonProps[] = [];

    json.results.forEach((el) => {
     fetch(el.url)
      .then((res) => res.json())
      .then((json) => {
       let pokemon = {
        id: json.id,
        avatar: json.sprites.front_default,
        nombre: json.name,
       };

       pokemons = [...pokemons, pokemon];
       //NOTE - Enviar array al STATE
       this.setState({ pokemons });
      })

      .catch((err) => console.log(err));
    });
   })
   .catch((err) => console.log(err));
 }

 render() {
  let classes = Classes();
  return (
   <>
    <ContenidoLesson classes={classes} />
    {/*NOTE -*Renderizar en el componente funcional el resultado de la peticion */}
    <div className="flex flex-wrap mt-4 gap-1">
     {this.state.pokemons.length === 20 ? (
      this.state.pokemons.map((el: PokemonProps) => (
       <Pokemon
        nombre={el.nombre}
        avatar={el.avatar}
        id={el.id}
        key={el.nombre}
       />
      ))
     ) : (
      <h3 className={classes.text}>Cargando...</h3>
     )}
    </div>
   </>
  );
 }
}
