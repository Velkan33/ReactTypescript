import React, { ReactDOM } from 'react';
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
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 // Se usa en vez de BrowserRouter cuando se tiene un hosting compartido.
 HashRouter,
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
import ServicesList from './pages/ServicesList';
import ServiceDisplay from './pages/ServiceDisplay';
import Login from './pages/Login';
import PrivateAuth from './pages/Private';

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
 const [services, setServices] = React.useState([
  { id: 1, name: 'Service1', price: '1000' },
  { id: 2, name: 'Service2', price: '2000' },
  { id: 3, name: 'Service3', price: '3000' },
  { id: 4, name: 'Service4', price: '4000' },
  { id: 5, name: 'Service5', price: '5000' },
 ]);

 let auth: boolean | null = true;
 auth = true;

 return (
  <HashRouter>
   <Menu />
   <ContextProvider>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     {/* LINK: This is how you redirect an old link or address, to a new desired one */}
     <Route path="/acerca" element={<Navigate to="/about" />} />
     {/** END */}
     <Route path="/React" element={<ReactEstudioDiario />} />
     <Route path="/products" element={<Products products={products} />} />
     {/* NOTE: This path is different, the ':id' detect the after '/' value and send it as param to the 'element' through 'useParams' hook in an object with a key named by the :value, example in this case {id: after'/'value }  */}
     <Route
      path="/products/:id"
      element={<ProductDetail products={products} />}
     />
     <Route path="/services" element={<Services />}>
      <Route index element={<ServicesHome />} />
      {/** This path also could be writen just, 'guarantee', because it asume it comes after services for being a nested route  */}
      <Route path="/services/guarantee" element={<ServicesGuarantee />} />

      <Route
       path="services_list"
       element={<ServicesList services={services} />}
      >
       <Route path=":id" element={<ServiceDisplay services={services} />} />
      </Route>
     </Route>
     {/** END */}

     {/* NOTE This Route is used to indicate what component should call in case there will no coincidence in the paths */}
     <Route path="/*" element={<Error404 />} />
     {/** END */}
     <Route path="/login" element={<Login />} />
     {/* Conditionally calling the Private if there is an authentication, if not it will send to the login page */}
     <Route
      path="/private"
      element={auth ? <PrivateAuth /> : <Navigate to="/login" />}
     />
    </Routes>
   </ContextProvider>
  </HashRouter>
 );
}
