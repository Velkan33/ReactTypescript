import React from 'react';
import Input from './Input';
import Table from './Table';
import ContextProvider from './ReducerContext';

export default function TodoApp7() {
 return (
  <ContextProvider>
   <div className="h-screen">
    <Input />
    <Table />
   </div>
  </ContextProvider>
 );
}
