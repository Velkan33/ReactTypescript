import React from 'react';
import {
 Form,
 Link,
 redirect,
 useLoaderData,
 useNavigate,
} from 'react-router-dom';
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
 const navigate = useNavigate();
 // When the name is empty will ease the delete process
 if (!contact.first && !contact.last) {
  return (
   <Form method="post">
    <button className="mt-2 mr-2 disabled:text-red-300" type="submit">
     Delete
    </button>

    <button type="button" className="!text-black" onClick={() => navigate(-1)}>
     Back
    </button>
   </Form>
  );
 }
 return (
  <Form method="post">
   <p>
    If you want to <span className="text-red-600">Delete</span> the user, write
    the complete user name and click delete
   </p>
   <input
    className="mr-2"
    type="text"
    value={contactName}
    onChange={(e) => {
     setContactName(e.target.value);
    }}
    placeholder="Complete Name"
   />
   <button
    className="mt-2 mr-2 disabled:text-red-300"
    type={checkName() ? 'submit' : 'button'}
    disabled={!checkName()}
   >
    Delete
   </button>

   <button type="button" className="!text-black" onClick={() => navigate(-1)}>
    Back
   </button>
  </Form>
 );
}
