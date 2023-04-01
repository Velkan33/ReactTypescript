import React, { useState, useEffect } from "react";
import { Classes } from "../assets/Classes";

export default function ScrollHooks(): JSX.Element {
 const [scrollY, setScrollY] = useState<number>();
 //ANCHOR - Fase de montaje se define con un array vacio como segundo parametro
 useEffect(() => {
  console.log("Fase de montaje");
 }, []);
 //ANCHOR - Fase de actualizacion es con el segundo parametro definido en un array de los "states" que vayamos a observar
 useEffect(() => {
  console.log("Fase de actualizacion");
  const detectarScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", detectarScroll);
  //NOTE - Este return se ejecutara cuando el componente sea desmontado
  return () => {
   window.removeEventListener("scroll", detectarScroll);
  };
 }, [scrollY]);
 //ANCHOR - Fase de renderizado es sin el segundo parametro del useEffect
 useEffect(() => {
  console.log("Fase de Renderizado");
 });
 //ANCHOR - Fase desmontaje seria el interior del return
 // useEffect(() => {
 //  console.log("Fase de Desmontaje");
 //  return () => {
 //   console.log("limpieza");
 //  };
 // });

 const classes = Classes();
 return (
  <>
   <h1 className={classes.h1}>Hooks useEffect y ciclo de vida</h1>
   <p className={classes.text}>Scroll Y del navegador {scrollY}px</p>
   <a className={classes.link} href="https://jonmircha.com/react#hooks">
    Link
   </a>
  </>
 );
}
