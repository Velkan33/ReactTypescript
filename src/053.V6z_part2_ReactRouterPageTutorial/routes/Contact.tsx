import React from 'react';
import {
 ActionFunctionArgs,
 Form,
 useLoaderData,
 redirect,
 useFetcher,
 useNavigation,
} from 'react-router-dom';
import { ContactType } from '../tools/types';
import { getContact, updateContact } from '../tools/contacts';

export async function loader(param: unknown) {
 // Solving type issue with param
 const { params } = param as { params: { contactId: string } };
 // -- //
 const contact = await getContact(params.contactId);
 // TODO - Handle this error extending the Error class
 if (!contact) {
  throw new Error('Not Found');
 }
 return { contact };
}

// ANCHOR - This 'action' function is what will call the Form inside the Component.
// As we see the 'request' is the data the Form send. And the 'params' is the object where the /:data/ is
export async function action({ request, params }: ActionFunctionArgs) {
 const formData = await request.formData();
 return updateContact(params.contactId, {
  favorite: formData.get('favorite') === 'true',
 });
}

function Favorite({ contact }: { contact: ContactType }) {
 const fetcher = useFetcher();
 // yes, this is a `let` for later
 let { favorite } = contact;
 if (fetcher.formData) {
  favorite = fetcher.formData.get('favorite') === 'true';
 }
 return (
  <fetcher.Form method="post">
   <button
    type="submit"
    name="favorite"
    className="seaching"
    value={favorite ? 'false' : 'true'}
    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
   >
    {favorite ? '★' : '☆'}
   </button>
  </fetcher.Form>
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
