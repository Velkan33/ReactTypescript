import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getContacts } from '../tools/contacts';
import { ContactType } from '../tools/types';
// className="absolute bottom-0 top-0"
export async function loader() {
 const contacts = await getContacts();
 return { contacts };
}

export default function Root() {
 const contacts = useLoaderData();
 console.log(contacts);
 return (
  <>
   <div id="sidebar">
    <h1>React Router Contacts</h1>
    <div>
     <form id="search-form" role="search">
      <input
       id="q"
       aria-label="Search contacts"
       placeholder="Search"
       type="search"
       name="q"
      />
      <div id="search-spinner" aria-hidden hidden />
      <div className="sr-only" aria-live="polite" />
     </form>
     <form method="post">
      <button type="submit">New</button>
     </form>
    </div>
    <nav>
     {(contacts as ContactType[]).length ? (
      <ul>
       {(contacts as ContactType[]).map((contact) => (
        <li key={contact.id}>
         <Link to={`contacts/${contact.id}`}>
          {contact.first || contact.last ? (
           <>
            {contact.first}
            {contact.last}
           </>
          ) : (
           <i>No Name</i>
          )}{' '}
         </Link>
        </li>
       ))}
      </ul>
     ) : (
      <i>No Contacts</i>
     )}
    </nav>
   </div>
   <div id="detail">
    <Outlet />
   </div>
  </>
 );
}
