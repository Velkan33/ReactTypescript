import {
 Link,
 Outlet,
 useLoaderData,
 Form,
 NavLink,
 useNavigation,
 ActionFunctionArgs,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getContacts, createContact } from '../tools/contacts';
import { ContactType } from '../tools/types';

// className="absolute bottom-0 top-0"
export async function loader({ request }: ActionFunctionArgs) {
 // ANCHOR - Here it create a new URL, an object that have searchParams.get('q') method that can identify the content of a determined param. Example /localhost/user?q=kevin  the output will be kevin. The 'q' string must be equivalent to the 'name' of the search input in the get form
 const url = new URL(request.url);
 console.log(url);
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
 const navigation = useNavigation();
 const [myValue, setMyValue] = useState('');
 useEffect(() => {
  setMyValue(q);
 }, [q]);
 return (
  <>
   <div id="sidebar">
    <h1>React Router Contacts</h1>
    <div>
     <Form id="search-form" role="search">
      <input
       id="q"
       aria-label="Search contacts"
       placeholder="Search"
       type="search"
       name="q"
       value={myValue || ''}
       onChange={(e) => setMyValue(e.target.value)}
      />
      <div id="search-spinner" aria-hidden hidden />
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
