import React from 'react';
import { useNavigate } from 'react-router-dom';
import SongQueryForm from './SongQueryForm';
import SongResults from './SongResults';
import SongDispatcherReducer from './SongContextReducer';
import SongFinderHeader from './SongFinderHeader';

export default function SongFinderApp() {
 const navigate = useNavigate();
 return (
  <SongDispatcherReducer>
   <div className="min-h-screen w-screen bg-gradient-to-br text-white from-blue-600 to-red-600">
    <button
     type="button"
     onClick={() => navigate(-1)}
     className=" fixed top-3 left-3 rounded-full h-8 w-8 bg-gray-300/50 hover:bg-gray-400/50 "
    >
     <span className="text-xl">&#x2190;</span>
    </button>
    <SongFinderHeader />
    <SongQueryForm />
    <SongResults />
   </div>
  </SongDispatcherReducer>
 );
}
