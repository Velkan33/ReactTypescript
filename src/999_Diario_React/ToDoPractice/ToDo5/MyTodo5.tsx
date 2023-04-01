import React from 'react';
import Input from './Input';
import ReducerContext from './ReducerContext';
import Tasks from './Tasks';

export default function MyTodo5() {
 return (
  <ReducerContext>
   <>
    <h1>To Do App 5</h1>
    <Input />
    <Tasks />
   </>
  </ReducerContext>
 );
}
