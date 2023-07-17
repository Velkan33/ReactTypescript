import React from 'react';

// import UserFetchApp from './999_Diario_React/DummyJSONFetchUsers/UserFetchApp';
// import LogginApp from './999_Diario_React/DummyJSONLoggin/LoginApp';
// import DummyShopApp from './999_Diario_React/DummyOnlineShop/DummyShopApp';
// import SelectList from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectList';
// import SelectsAnidados from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectsAnidados';
// import ContactForm2 from './046_Validacion_Formulario_Programacion_de_Eventos_2_de_4 /ContactForm';

import ReactRouterV6Course from './053.V6_ReactRouterV6/ReactRouterV6Course';
import AppReactRouterTutorial2 from './053.V6z_part2_ReactRouterPageTutorial/AppReactRouterTutorial';
import TeslaLandingPage from './999_Diario_React/TeslaLandingPage/TeslaLandingPage';
import BaseRouter from './065_ReactRouterEjercicios_CRUD_API_con_Rutas_1_de_2/router/BaseRouter';
import CrudAppIndex from './065_ReactRouterEjercicios_CRUD_API_con_Rutas_1_de_2/Components/CrudApp/CrudAppIndex';
import CrudAppIndex2 from './066_ReactRouterEjercicios_CRUD_API_con_Rutas_2_de_2/Components/CrudApp/CrudAppIndex';
import SongFinderAppRouter from './067_ReactRouterEjercicios_Buscador_Canciones_con_Rutas_y_localStorage_1_de_5/Components/SongFinder/SongFinderApp';

function App() {
 // const SongFinderStyle1 =
 //  'min-h-screen w-full bg-gradient-to-l from-blue-400 to-violet-400 text-black font-bold';
 // const SongFinderStyle = 'w-full  text-black font-bold';
 const SongFinderStyle = 'w-full h-full';
 return (
  <div className={SongFinderStyle}>
   {/* <CrudApi5A /> */}
   {/* <SongSearch /> */}
   {/* <UserFetchApp /> */}
   {/* <DummyShopApp /> */}
   {/* <SelectsAnidados /> */}
   {/* <ContactForm4 /> */}
   {/* <ContainerModal3 /> */}
   {/* <ContainerModalPortal /> */}
   {/* <ReactRouterV6Course /> */}
   {/* <AppReactRouterTutorial2 /> */}
   {/* <TeslaLandingPage /> */}
   {/* <CrudApi /> */}
   {/* <SongFinderApp /> */}
   {/* <BaseRouter /> */}
   {/* <CrudAppIndex2 /> */}
   <SongFinderAppRouter />
  </div>
 );
}

export default App;
