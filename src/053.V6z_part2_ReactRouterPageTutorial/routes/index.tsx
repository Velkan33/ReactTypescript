import React from 'react';
import { getContacts } from '../tools/contacts';
import Contact from './Contact';
import { ContactType } from '../tools/types';

// export async function loader() {
//  const contacts = await getContacts();
//  console.log(contacts);
//  return { contact: (contacts as Array<ContactType>)[0] };
// }
// export default function Index() {
//  return <Contact />;
// }

export default function Index() {
 return (
  <p id="zero-state">
   This is a demo for React Router.
   <br />
   Check out{' '}
   <a className="underline" href="https://reactrouter.com">
    the docs at reactrouter.com
   </a>
   .
  </p>
 );
}
