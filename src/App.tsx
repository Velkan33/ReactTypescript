import React from 'react';

import UserFetchApp from './999_Diario_React/DummyJSONFetchUsers/UserFetchApp';
import LogginApp from './999_Diario_React/DummyJSONLoggin/LoginApp';
import DummyShopApp from './999_Diario_React/DummyOnlineShop/DummyShopApp';

function App() {
 const SongFinderStyle1 =
  'min-h-screen w-full bg-gradient-to-l from-blue-400 to-violet-400 text-black font-bold';
 const SongFinderStyle = 'w-full  text-black font-bold';
 return (
  <div className={SongFinderStyle}>
   {/* <CrudApi5A /> */}
   {/* <SongSearch /> */}
   {/* <UserFetchApp /> */}
   <DummyShopApp />
  </div>
 );
}

export default App;
