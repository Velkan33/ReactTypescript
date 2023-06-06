import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
 BrowserRouter,
 Routes,
 Route,
 Link,
 NavLink,
 Navigate,
 useParams,
} from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';
import ReactEstudioDiario from '../999_Diario_React/EstudioDiario/ReactEstudioDiario';
import Error404 from './pages/Error404';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

// BrowserRouter envuelve el componente donde se usara el Router, Routes envuelve las rutas, Route van a ser las rutas, Link van a ser los link de las rutas,
export default function ReactRouterV6Course() {
 const products = [
  { id: 1, name: 'Product1', price: '100' },
  { id: 2, name: 'Product2', price: '200' },
  { id: 3, name: 'Product3', price: '300' },
  { id: 4, name: 'Product4', price: '400' },
  { id: 5, name: 'Product5', price: '500' },
 ];

 return (
  <BrowserRouter>
   <Menu />
   <ContextProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     {/* LINK: This is how you redirect an old link or address, to a new desired one */}
     <Route path="/acerca" element={<Navigate to="/about" />} />
     {/** END */}
     <Route path="/contact" element={<Contact />} />
     <Route path="/React" element={<ReactEstudioDiario />} />
     {/* NOTE This */}
     <Route path="/products" element={<Products />} />
     {/** END */}
     {/* NOTE: This path is different, the ':id' detect the :id value and send it as param to the 'element' through 'useParams' hook  */}
     <Route path="/products/:id" element={<ProductDetail />} />
     {/** END */}
     {/* NOTE This Route is used to indicate what component should call in case there will no coincidence in the paths */}
     <Route path="/*" element={<Error404 />} />
     {/** END */}
    </Routes>
   </ContextProvider>
  </BrowserRouter>
 );
}
