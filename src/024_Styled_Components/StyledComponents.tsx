import React from "react";
import { Classes } from "../assets/Classes";
import styled, {
 ThemeProvider,
 css,
 keyframes,
 createGlobalStyle,
} from "styled-components";

export default function StyledComponents() {
 //ANCHOR - Un estilo global es un estilo que nos servira para toda la aplicacion, por lo general se usa donde se llama al componente donde se valla a usar
 const GlobalStyle = createGlobalStyle`h3{color:green;}`;
 let classes = Classes();
 //NOTE - Podemos crear variables y luego usarlas dentro de un styled component
 let mainColor = "#db7093",
  mainAlphaColor80 = "#db709380";
 //NOTE - Tambien puedo crear una funcion y ejecutarla dentro del styled component para que cree un valor deseado.
 let myTransitionFunct = (time: string): string =>
  `background-color ${time} ease-in-out`;

 //NOTE - Tambien podemos crear variables con animaciones trayendo keyframes desde styled-components
 let fadeIn = keyframes`
  0%{
 opacity:0;
 }
50%{
opacity:1}
 100%{opacity:0}`;

 //STUB - Esta es la manera en la que se usan los temas claros y oscuros mediante Styled Components
 //STUB - Se crean variables con cada tema y valores particulares
 let light = {
  color: "black",
  bgColor: "white",
 };
 let dark = { color: "white", bgColor: "black" };

 let Box = styled.div`
  padding: 1rem;
  margin: 1rem;
  //STUB - Y luego se usan las variables dentro de theme segun lo que le pasemos a la variable theme dentro de ThemeProvider(otra utilidad dentro de Styled Components)
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
 `;

 let MyH3 = styled.h3`
  padding: 1rem;
  margin: 1rem;
  background-color: ${mainColor};
  transition: ${myTransitionFunct("500ms")};
  &:hover {
   background-color: ${mainAlphaColor80};
  }
 `;
 let MyH4 = styled.h4`
  padding: 1rem;
  margin: 1rem;
  //LINK - De esta manera es que acepto una prop pasada por un componente.
  background-color: ${(props) => props.color};
  //LINK - Tambien se puede destructurar y establecer condiciones
  background-color: ${({ color }) => color || "blue"};
  //NOTE - Podemos crear css con condicionales mediante css'propiedades css' lo cual se usaria para retornar css dentro del styled componentes
  ${(props) =>
   props &&
   css`
    border-radius: 5px;
   `}
  animation:${fadeIn} 2s infinite ease-out
 `;
 //REVIEW - De esta manera es que se extienden estilos de un elemento styled a otro, styled(elemento a heredar)'propiedades adicionales'
 let BoxBorderRed = styled(Box)`
  border: 3px solid red;
 `;
 return (
  <>
   {/*ANCHOR - Aqui llamo al estilo global y dentro de toodo este return se deben afectar los elementos modificados en mi constante GlobalStyle */}
   <GlobalStyle />
   <h1 className={classes.h2}>Componentes Estilizados</h1>
   {/* NOTE - Al invocar el componente este se crea con el nombre de la variable
   usada con el styled (MyH3) e internamente react creara el elemento asignado
   al 'styled' en este caso un 'h3' */}
   <MyH3>Hola soy un "h3" estilizado con styled-components</MyH3>
   {/*LINK - Aqui le paso una prop al componente con una variable color que
   utilizo mas arriba*/}
   <MyH4 color={"red"}>la soy otro "h3" estilizado con styled-components</MyH4>
   <MyH4>Text</MyH4>
   {/*STUB - Esta etiqueta es la que provee un tema a su contenido*/}
   <ThemeProvider theme={light}>
    <Box>Soy una box clara</Box>
    <BoxBorderRed>
     Elemento que heredo de Box sus propiedades iniciales
    </BoxBorderRed>
   </ThemeProvider>
   <ThemeProvider theme={dark}>
    <Box>Soy una box oscura</Box>
    <BoxBorderRed>
     Elemento que heredo de Box sus propiedades iniciales
    </BoxBorderRed>
   </ThemeProvider>
   <h3 className="bg-sky-400 hover:bg-sky-400/80 p-4 m-4 transition duration-500 ease-in-out">
    Hola soy un componente estilizado con tailwind
   </h3>
   <p className={classes.text}>
    La diferencia es clara, styled-components se estiliza fuera del componente
    con un formato css
   </p>
   <p className={classes.text}>
    Mientras que Tailwind se escribe dentro de la clase.
   </p>
   <p className={classes.text}>
    Para utilizar styled-components importamos styled y creamos una variable
    dentro del componente la cual sera styled.h1`propiedades css`
   </p>
  </>
 );
}
