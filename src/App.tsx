import React from 'react';

// import UserFetchApp from './999_Diario_React/DummyJSONFetchUsers/UserFetchApp';
// import LogginApp from './999_Diario_React/DummyJSONLoggin/LoginApp';
// import DummyShopApp from './999_Diario_React/DummyOnlineShop/DummyShopApp';
// import SelectList from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectList';
// import SelectsAnidados from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectsAnidados';
// import ContactForm2 from './046_Validacion_Formulario_Programacion_de_Eventos_2_de_4 /ContactForm';

import ReactRouterV6Course from './053.V6_ReactRouterV6/ReactRouterV6Course';

function App() {
 // const SongFinderStyle1 =
 //  'min-h-screen w-full bg-gradient-to-l from-blue-400 to-violet-400 text-black font-bold';
 const SongFinderStyle = 'w-full  text-black font-bold';
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
   <ReactRouterV6Course />
  </div>
 );
}

export default App;
