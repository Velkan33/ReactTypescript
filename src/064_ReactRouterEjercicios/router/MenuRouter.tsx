import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuRouter() {
 const buttonStyle =
  'rounded-lg hover:bg-gray-100 shadow m-2 px-3 py-2 text-gray-600';
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
