import React, { Component } from "react";
import { Classes } from "../assets/Classes";
import axios from "axios";

interface MyProps {}
interface MyState {
 list: (string | JSX.Element)[];
}

interface AxiosDataElem {
 nombre: string;
 constelacion: string;
 id: number;
}

export default class PeticionesAsincronasMy extends Component<
 MyProps,
 MyState
> {
 constructor(props: MyProps) {
  super(props);
  this.state = { list: [] };
 }

 componentDidMount(): void {
  let lista: JSX.Element[] = [];
  const Ax = async () => {
   try {
    let ax = await axios({
     method: "GET",
     url: "http://localhost:6655/santos",
    });
    let data = await ax.data;
    console.log(data);
    data.forEach((el: AxiosDataElem) => {
     lista.push(<li key={el.nombre}>{el.nombre}</li>);
    });
    this.setState({ list: lista });
   } catch (err) {
    console.log(err);
   }
  };
  Ax();
 }

 render(): React.ReactNode {
  let classes = Classes();
  return (
   <>
    <h1 className={classes.h1}>Hola Mundo</h1>
    <ul className={classes.list}>{this.state.list}</ul>
   </>
  );
 }
}
