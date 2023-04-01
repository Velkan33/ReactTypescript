import React from "react";

interface CompProps {
 msg: string;
}

// function ComponenteFuncional(props: CompProps) {
//  return <h3>{props.msg}</h3>;
// }

//Modo simplificado de lo de arriba
const ComponenteFuncional = (props: CompProps) => <h3>{props.msg}</h3>;

export default ComponenteFuncional;
