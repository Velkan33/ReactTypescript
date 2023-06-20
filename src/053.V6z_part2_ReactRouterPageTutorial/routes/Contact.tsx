import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { ContactType } from '../tools/types';
import { getContact } from '../tools/contacts';

export async function loader(param: unknown) {
 // Solving type issue with param
 const { params } = param as { params: { contactId: string } };
 // -- //
 const contact = await getContact(params.contactId);
 return { contact };
}

function Favorite({ contact }: { contact: ContactType }) {
 // yes, this is a `let` for later
 let favorite = false;
 favorite = contact.favorite || false;
 return (
  <Form method="post">
   <button
    type="button"
    name="favorite"
    value={favorite ? 'false' : 'true'}
    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
   >
    {favorite ? '★' : '☆'}
   </button>
  </Form>
 );
}
export default function Contact() {
 const contactObject = useLoaderData();
 const { contact } = contactObject as { contact: ContactType };
 return (
  <div id="contact">
   <div className="mx-2">
    <img
     key={contact.avatar}
     src={contact.avatar || undefined}
     alt={contact.avatar || undefined}
    />
   </div>

   <div>
    <h1>
     {contact.first || contact.last ? (
      <>
       {contact.first} {contact.last}
      </>
     ) : (
      <i>No Name</i>
     )}
     <Favorite contact={contact} />
    </h1>

    {contact.twitter && (
     <p>
      <a
       target="_blank"
       href={`https://twitter.com/${contact.twitter}`}
       rel="noreferrer"
      >
       {contact.twitter}
      </a>
     </p>
    )}

    {contact.notes && <p>{contact.notes}</p>}

    <div>
     {/* //This action will just change the URL */}
     <Form action="edit">
      <button type="submit">Edit</button>
     </Form>
     <Form action="destroy">
      <button type="submit">Delete</button>
     </Form>
    </div>
   </div>
  </div>
 );
}
