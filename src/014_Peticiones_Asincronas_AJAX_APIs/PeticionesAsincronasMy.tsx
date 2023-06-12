import React, { Component } from 'react';
import axios from 'axios';
import { Classes } from '../assets/Classes';

type MyProps = object;
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
  const lista: JSX.Element[] = [];
  const Ax = async () => {
   try {
    const ax = await axios({
     method: 'GET',
     url: 'http://localhost:6655/santos',
    });
    const data = await ax.data;
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
  const classes = Classes();
  return (
   <>
    <h1 className={classes.h1}>Hola Mundo</h1>
    <ul className={classes.list}>{this.state.list}</ul>
   </>
  );
 }
}
