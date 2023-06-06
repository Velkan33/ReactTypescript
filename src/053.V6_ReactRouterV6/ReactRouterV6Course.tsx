import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import ReactEstudioDiario from '../999_Diario_React/EstudioDiario/ReactEstudioDiario';

// BrowserRouter envuelve el componente donde se usara el Router, Routes envuelve las rutas, Route van a ser las rutas, Link van a ser los link de las rutas,
export default function ReactRouterV6Course() {
 return (
  <BrowserRouter>
   <Menu />
   <ContextProvider>
    <Routes>
     <Route path="" element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="contact" element={<Contact />} />
     <Route path="React" element={<ReactEstudioDiario />} />
    </Routes>
   </ContextProvider>
  </BrowserRouter>
 );
}
