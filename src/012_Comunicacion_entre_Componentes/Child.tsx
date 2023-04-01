import React from "react";
interface MyProps {
 incrementarContador: () => void;
 buttonStyle: string;
 h2Style: string;
}

export class Child extends React.Component<MyProps, {}> {
 render(): React.ReactNode {
  return (
   <>
    <h2 className={this.props.h2Style + " pt-2"}>
     Evento llamado desde el componente Hijo
    </h2>
    <button
     onClick={this.props.incrementarContador}
     className={this.props.buttonStyle}
    >
     Saludos
    </button>
   </>
  );
 }
}
