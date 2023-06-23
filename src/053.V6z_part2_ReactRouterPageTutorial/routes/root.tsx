import {
 Link,
 Outlet,
 useLoaderData,
 Form,
 NavLink,
 useNavigation,
 ActionFunctionArgs,
 useSubmit,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getContacts, createContact } from '../tools/contacts';
import { ContactType } from '../tools/types';

// className="absolute bottom-0 top-0"
export async function loader({ request }: ActionFunctionArgs) {
 // ANCHOR - Here it create a new URL, an object that have searchParams.get('q') method that can identify the content of a determined param. Example /localhost/user?q=kevin  the output will be kevin. The 'q' string must be equivalent to the 'name' of the search input in the get form
 const url = new URL(request.url);
 const q = url.searchParams.get('q');
 const contacts = await getContacts(q);
 return { contacts, q };
}

export async function action() {
 const contact = await createContact();
 return { contact };
}

export default function Root() {
 const contactObject = useLoaderData();
 const { contacts, q } = contactObject as { contacts: []; q: string };
 // ANCHOR This will retrieve severals page status, like iddle loading and location values like pathname, search, hash, key, etc. console.log for more info
 const navigation = useNavigation();
 // LINK This works with new URL to look inside an URL object to see if it has the requested parameter inside it
 const searching =
  navigation.location &&
  new URLSearchParams(navigation.location.search).has('q');
 // console.log(
 //  navigation.location
 //   \? new URLSearchParams(navigation.location.search)
 //   : 'empty'
 // );
 // console.log(navigation);

 const [myValue, setMyValue] = useState('');
 useEffect(() => {
  setMyValue(q);
 }, [q]);
 const submit = useSubmit();
 return (
  <>
   <div id="sidebar">
    <h1>React Router Contacts</h1>
    <div>
     {/* ANCHOR This form will call the loader if we dont especify the method */}
     <Form id="search-form" role="search">
      <input
       className={searching ? 'loading' : ''}
       id="q"
       aria-label="Search contacts"
       placeholder="Search"
       type="search"
       name="q"
       value={myValue || ''}
       // NOTE This will set the state and submit the e currentTarget=input .form=Form, this will serialize and submit the form you pass to it
       onChange={(e) => {
        setMyValue(e.target.value);
        const isFirstSearch = q == null;
        // The replace option will replace the history every time the 'q' is different from null to avoid creating a history on every keystroke
        submit(e.currentTarget.form, { replace: !isFirstSearch });
       }}
      />
      <div id="search-spinner" aria-hidden hidden={!searching} />
      <div className="sr-only" aria-live="polite" />
     </Form>
     <Form method="post">
      <button type="submit">New</button>
     </Form>
    </div>
    <nav>
     {(contacts as ContactType[]).length ? (
      <ul>
       {(contacts as ContactType[]).map((contact) => (
        <li
         key={contact.id}
         className="rounded-lg hover:shadow hover:shadow-black/[0.15] "
        >
         <NavLink
          className={({ isActive, isPending }) => {
           if (isActive) {
            return 'active';
           }
           if (isPending) {
            return 'pending';
           }
           return '';
          }}
          to={`contacts/${contact.id}`}
         >
          {contact.first || contact.last ? (
           <>
            {contact.first} {contact.last}
           </>
          ) : (
           <i>No Name</i>
          )}{' '}
         </NavLink>
        </li>
       ))}
      </ul>
     ) : (
      <i>No Contacts</i>
     )}
    </nav>
   </div>
   <div id="detail" className={navigation.state === 'loading' ? 'loading' : ''}>
    <Outlet />
   </div>
  </>
 );
}
