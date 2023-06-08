import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
 BrowserRouter,
 Routes,
 Route,
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 Link,
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 NavLink,
 Navigate,
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 useParams,
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 useNavigate,
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 Outlet,
} from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';
import ReactEstudioDiario from '../999_Diario_React/EstudioDiario/ReactEstudioDiario';
import Error404 from './pages/Error404';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import ServicesGuarantee from './pages/ServicesGuarantee';
import ServicesHome from './pages/ServicesHome';

// BrowserRouter envuelve el componente donde se usara el Router, Routes envuelve las rutas, Route van a ser las rutas, Link van a ser los link de las rutas,
// STUB Here start the Main component
export default function ReactRouterV6Course() {
 // This is a simulated database
 const [products, setProducts] = React.useState([
  { id: 1, name: 'Product1', price: '100' },
  { id: 2, name: 'Product2', price: '200' },
  { id: 3, name: 'Product3', price: '300' },
  { id: 4, name: 'Product4', price: '400' },
  { id: 5, name: 'Product5', price: '500' },
 ]);
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
     <Route path="/React" element={<ReactEstudioDiario />} />
     {/* NOTE This */}
     <Route path="/products" element={<Products products={products} />} />
     {/** END */}
     {/* NOTE: This path is different, the ':id' detect the after '/' value and send it as param to the 'element' through 'useParams' hook in an object with a key named by the :value, example in this case {id: after'/'value }  */}
     <Route
      path="/products/:id"
      element={<ProductDetail products={products} />}
     />
     <Route path="/services" element={<Services />}>
      <Route index element={<ServicesHome />} />
      {/** This path also could be writen just, guarantee, because he asume it comes after services */}
      <Route path="/services/guarantee" element={<ServicesGuarantee />} />
     </Route>
     {/** END */}
     {/* NOTE This Route is used to indicate what component should call in case there will no coincidence in the paths */}
     <Route path="/*" element={<Error404 />} />
     {/** END */}
    </Routes>
   </ContextProvider>
  </BrowserRouter>
 );
}
