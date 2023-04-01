import React from 'react';
import { Classes } from '../assets/Classes';

interface MyList {
 title: string;
 child: { id: number; text: string }[];
}
export default function List({ child, title }: MyList): JSX.Element {
 const classes = Classes();
 const childrenIsTrue =
  child && child.map((elem) => <li key={elem.id}>{elem.text}</li>);
 return (
  <>
   <h2 className={classes.h1}>{title}</h2>
   <ul className={`${classes.list} text-lg`}>{childrenIsTrue}</ul>
  </>
 );
}
