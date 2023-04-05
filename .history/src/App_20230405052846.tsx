import React from 'react';

import UserFetchApp from './999_Diario_React/DummyJSONFetchUsers/UserFetchApp';
import LogginApp from './999_Diario_React/DummyJSONLoggin/LoginApp';

function App() {
 const SongFinderStyle =
  'h-full w-full bg-gradient-to-l from-blue-600 to-violet-600 text-white';
 return (
  <div className={SongFinderStyle}>
   {/* <CrudApi5A /> */}
   {/* <SongSearch /> */}
   {/* <UserFetchApp /> */}
   <LogginApp />
  </div>
 );
}

export default App;
