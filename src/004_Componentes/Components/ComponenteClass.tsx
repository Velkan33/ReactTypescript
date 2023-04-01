import React, { Component } from "react";

interface CompProps {
 msg: string;
}
//Este < {msg:string}, {}> se refiere a las props y state que toma la class
class Componente extends Component<{ msg: string }, {}> {
 constructor(props: CompProps) {
  super(props);
 }
 render() {
  return <h3>{this.props.msg}</h3>;
 }
}
export default Componente;
