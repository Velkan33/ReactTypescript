import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/styles';

export default function MenuRouter() {
 const buttonStyle = styles.button;
 return (
  <div>
   <Link to="/crud" className={buttonStyle}>
    Crud App
   </Link>
   <Link to="/songFinder" className={buttonStyle}>
    Song Finder
   </Link>
  </div>
 );
}
