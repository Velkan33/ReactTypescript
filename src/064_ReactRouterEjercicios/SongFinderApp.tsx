import React from 'react';
import SongQueryForm from './SongQueryForm';
import SongResults from './SongResults';
import SongDispatcherReducer from './SongContextReducer';
import SongFinderHeader from './SongFinderHeader';

export default function SongFinderApp() {
 return (
  <SongDispatcherReducer>
   <div className="min-h-screen w-screen bg-gradient-to-br text-white from-blue-600 to-red-600">
    <SongFinderHeader />
    <SongQueryForm />
    <SongResults />
   </div>
  </SongDispatcherReducer>
 );
}
