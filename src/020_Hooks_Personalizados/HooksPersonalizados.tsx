import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Pokemon } from "./Pokemons";

export default function HooksPersonalizados() {
 let url = "https://pokeapi.co/api/v2/pokemon/";
 let pokemons: { nombre: string }[] = [];
 let ft = useFetch(url);
 if (!ft.isPending && ft.error.error === false && ft.data !== null) {
  ft.data.results.forEach((el) => {
   pokemons.push({ nombre: el.name });
  });
 } else if (ft.isPending && "status" in ft.error) {
  console.log(ft.error);
 }

 return (
  <>
   <h2>Hooks Personalizados</h2>
   {pokemons.length !== 0 ? (
    pokemons.map((el) => {
     return <Pokemon key={el.nombre} nombre={el.nombre} />;
    })
   ) : (
    <h3>Cargando...</h3>
   )}
  </>
 );
}
