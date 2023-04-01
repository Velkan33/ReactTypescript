import React from 'react';

import CrudApi5A from './36_Peticiones_HTTP_to_API/CrudApp';
import TicTacToeApp from './999_Diario_React/TicTacToe/TicTacToeApp';
import SongFinderApp from './999_Diario_React/SongFinder/SongFinderApp';
import SongSearch from './040_Buscador_De_Canciones:Renderizado_Condicional_de_Datos(4_de_5)/SongSearch';
import SelectsAnidados from './044_Selects_Anidados:Renderizado_de_Datos_y_Estilos_CSS_3_de_3/SelectsAnidados';

function App() {
 const SongFinderStyle =
  'h-full w-full bg-gradient-to-l from-blue-600 to-violet-600 text-white';
 return (
  <div className={SongFinderStyle}>
   {/* <CrudApi5A /> */}
   {/* <SongSearch /> */}
   <SelectsAnidados />
  </div>
 );
}

export default App;
