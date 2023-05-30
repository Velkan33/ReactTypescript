import React from 'react';

// import UserFetchApp from './999_Diario_React/DummyJSONFetchUsers/UserFetchApp';
// import LogginApp from './999_Diario_React/DummyJSONLoggin/LoginApp';
// import DummyShopApp from './999_Diario_React/DummyOnlineShop/DummyShopApp';
// import SelectList from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectList';
// import SelectsAnidados from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectsAnidados';
// import ContactForm2 from './046_Validacion_Formulario_Programacion_de_Eventos_2_de_4 /ContactForm';
import ContactForm3 from './047_Validacion_Formulario_Programacion_de_validaciones_3_de_4/ContactForm';
import ContactForm4 from './048_Validacion_Formulario_Envio_de_datos_4_de_4/ContactForm';
import ContainerModal from './49_Ventana_Modal_Prop_Children/ContainerModal';
import ContainerModal2 from './50_Ventana_Modal_Logica_del_componente_2_de_3/ContainerModal';
import ContainerModal3 from './51_Ventana_Modal_Reutilizacion_y_funcionalidad_del_componente_3_de_3 /ContainerModal';

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
   <ContainerModal3 />
  </div>
 );
}

export default App;
