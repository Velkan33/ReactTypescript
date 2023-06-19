import React from 'react';
import { Form, Link, redirect, useLoaderData } from 'react-router-dom';
import { deleteContact, getContact } from '../tools/contacts';
import { ContactType } from '../tools/types';
// This action automatically will remove and redirect, this way updating the data
export async function action(param: unknown) {
 const { params } = param as { params: { contactId: string } };
 await deleteContact(params.contactId);
 return redirect('/');
}
export async function loader(param: unknown) {
 // Solving type issue with param
 const { params } = param as { params: { contactId: string } };
 // -- //
 const contact = await getContact(params.contactId);
 return { contact };
}

export default function DeleteContact() {
 const [contactName, setContactName] = React.useState('');
 const contactObject = useLoaderData();
 const { contact } = contactObject as { contact: ContactType };
 // Check prompted name is the same
 function checkName() {
  if (contactName.trim() === `${contact.first} ${contact.last}`.trim())
   return true;
  return false;
 }
 return (
  <Form className="[&>button]:mr-2" method="post">
   <p>
    If you want to <span className="text-red-600">Delete</span> the user, write
    the complete user name and click delete
   </p>
   <input
    type="text"
    value={contactName}
    onChange={(e) => {
     setContactName(e.target.value);
    }}
    placeholder="Complete Name"
   />
   <button
    className="mt-2 disabled:text-red-300"
    type={checkName() ? 'submit' : 'button'}
    disabled={!checkName()}
   >
    Delete
   </button>
   <Link to={`/contacts/${contact.id}`}>
    <button type="button" className="!text-black">
     Back
    </button>
   </Link>
  </Form>
 );
}
