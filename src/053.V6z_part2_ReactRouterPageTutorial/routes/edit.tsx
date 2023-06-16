import {
 Form,
 useLoaderData,
 redirect,
 ActionFunctionArgs,
} from 'react-router-dom';
import { ContactType } from '../tools/types';
import { getContact, updateContact } from '../tools/contacts';
/// This will execute when the form is loaded
export async function loader(param: unknown) {
 console.log('formulario cargado');
 const { params } = param as { params: { contactId: string } };
 const contact = await getContact(params.contactId);

 return { contact };
}
/// Here 'request' will contain the content of the form
// This will execute when the form is submit
export async function action({ request, params }: ActionFunctionArgs) {
 const formData = await request.formData();
 const updates = Object.fromEntries(formData);
 await updateContact(params.contactId, updates);
 return redirect(`/contacts/${params.contactId}`);
}
///
export default function EditContact() {
 const contactObject = useLoaderData();
 const { contact } = contactObject as { contact: ContactType };

 return (
  <Form method="post" id="contact-form">
   <p>
    <span>Name</span>
    <input
     placeholder="First"
     aria-label="First name"
     type="text"
     name="first"
     defaultValue={contact.first}
    />
    <input
     placeholder="Last"
     aria-label="Last name"
     type="text"
     name="last"
     defaultValue={contact.last}
    />
   </p>
   <label htmlFor="twitterEdit">
    <span>Twitter</span>
    <input
     id="twitterEdit"
     type="text"
     name="twitter"
     placeholder="@jack"
     defaultValue={contact.twitter}
    />
   </label>
   <label htmlFor="avatarEdit">
    <span>Avatar URL</span>
    <input
     id="avatarEdit"
     placeholder="https://example.com/avatar.jpg"
     aria-label="Avatar URL"
     type="text"
     name="avatar"
     defaultValue={contact.avatar}
    />
   </label>
   <label htmlFor="notesEdit">
    <span>Notes</span>
    <textarea
     name="notes"
     id="notesEdit"
     defaultValue={contact.notes}
     rows={6}
    />
   </label>
   <p>
    <button type="submit">Save</button>
    <button type="button">Cancel</button>
   </p>
  </Form>
 );
}
