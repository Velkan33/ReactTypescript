import React, {
 useState,
 useEffect,
 useRef,
 ReactEventHandler,
 MouseEventHandler,
 RefObject,
} from "react";
import { Classes } from "../assets/Classes";
/**
 * Las referencias son como selectores
 * HTML pero para ser usados con REACT
 */

export default function Referencias() {
 //NOTE - Crear Referencias en modo de classes
 // let refMenu = createRef()
 // let refMenuBtn = createRef()
 //NOTE Crear Referencias modo moderno con Hooks

 const refMenuBtn = useRef<HTMLButtonElement>(null!);
 const refMenu = useRef<HTMLElement>(null!);

 let handleToggleMenu = (
  e: React.MouseEvent<HTMLElement, MouseEvent>
 ): void => {
  //NOTE - Para seleccionar el elemento accedemos al ref.current y luego a las propiedades del elemento como si fuera un HTML
  const $menu = refMenu.current;
  // if ($menu === null) return; //Como coloque null! en el useRef este narrowing es innecesario
  if ("textContent" in e.target) {
   if (e.target.textContent === "Menu") {
    e.target.textContent = "Cerrar";
    $menu.classList.replace("block", "hidden");
   } else {
    e.target.textContent = "Menu";
    $menu.classList.replace("hidden", "block");
   }
  }
 };

 //NOTE - ESTE ES EL METODO ESTANDAR NO RECOMENDADO EN REACT
 // const handleToggleMenu = (
 //  e: React.MouseEvent<HTMLElement, MouseEvent>
 // ): void => {
 //  const $menu = document.getElementById("menu");
 //  if ($menu === null) return;
 //  if ("textContent" in e.target) {
 //   if (e.target.textContent === "Menu") {
 //    e.target.textContent = "Cerrar";
 //    $menu.classList.contains("block")
 //     ? $menu.classList.replace("block", "hidden")
 //     : $menu.classList.add("hidden");
 //   } else {
 //    e.target.textContent = "Menu";
 //    $menu.classList.contains("hidden")
 //     ? $menu.classList.replace("hidden", "block")
 //     : $menu.classList.add("block");
 //   }
 //  }
 // };

 let style = Classes();
 return (
  <>
   <h2 className={style.h2}>Referencias</h2>
   {/**REVIEW - Se le coloca la referencia al elemento HTML  */}
   <button
    id="menu-btn"
    ref={refMenuBtn}
    onClick={handleToggleMenu}
    className={style.button}
   >
    Menu
   </button>
   <nav id="menu" ref={refMenu} className="block">
    <a href="#" className={style.link + " !text-lg"}>
     Seccion 1
    </a>
    <a href="#" className={style.link + " !text-lg"}>
     Seccion 2
    </a>
    <a href="#" className={style.link + " !text-lg"}>
     Seccion 3
    </a>
    <a href="#" className={style.link + " !text-lg"}>
     Seccion 4
    </a>
    <a href="#" className={style.link + " !text-lg"}>
     Seccion 5
    </a>
   </nav>
  </>
 );
}
