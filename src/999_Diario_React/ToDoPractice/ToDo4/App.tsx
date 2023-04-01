import React from 'react';
import Input from './Input';
import ContextGiver from './Reducer';
import Tasks from './Tasks';

export default function AppToDo4() {
 return (
  <ContextGiver>
   <>
    <h1>ToDo App 4</h1>
    <Input />
    <Tasks />
   </>
  </ContextGiver>
 );
}
