import React from 'react';
import List from './List';

export default function Elem() {
 const title = 'React Snippets';
 const child = [
  { id: 0, text: 'imr: import React from `react`' },
  { id: 1, text: "imrse: import React, {useState, useEffect} from 'react';" },
  { id: 2, text: 'useEffect: invoca un template de useEffect' },
  { id: 3, text: 'useState: invoca un template de useState' },
  { id: 4, text: 'Lo anterior ocurre con todos los hooks de react' },
  { id: 5, text: 'ccc: Crea un ClassComponent con Constructor' },
  { id: 6, text: 'rafc: Crea un React ArrowFunction Component(hook)' },
  {
   id: 7,
   text: 'rafce: Crea un React Arrow Function Component con Export Default',
  },
  { id: 8, text: 'rfc: Crea un React Function Component(hook)' },
  { id: 9, text: 'rfce: Crea un React Function Component con Export Default' },
  { id: 10, text: 'rafc: Crea un React ArrowFunction Component(hook)' },
 ];
 return <List title={title} child={child} />;
}
