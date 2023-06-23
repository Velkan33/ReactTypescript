import localforage from 'localforage';
import { matchSorter } from 'match-sorter';
// import sortBy from 'sort-by';
import { ContactType } from './types';

type TempType = { id: number };

function set(contacts: unknown) {
 return localforage.setItem('contacts', contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key?: unknown) {
 if (!key) {
  fakeCache = {};
 }

 // This code will NEVER run

 // if (fakeCache[key]) {
 // return;
 // }

 // fakeCache[key] = true;
 // return new Promise((res) => {
 //  setTimeout(res, Math.random() * 800);
 // });
}

export async function getContacts(query?: unknown) {
 await fakeNetwork(`getContacts:${query}`);
 let contacts = await localforage.getItem('contacts');
 if (!contacts) contacts = [];
 if (query) {
  contacts = matchSorter(contacts as readonly string[], query as string, {
   keys: ['first', 'last'],
  });
 }
 // NOTE Here could sort the contacts
 // return contacts.sort(sortBy('last', 'createdAt'));
 return contacts;
}

// ANCHOR The types here are temporal
export async function createContact() {
 await fakeNetwork();
 const id = Math.random().toString(36).substring(2, 9);
 const contact = { id, createdAt: Date.now() };
 const contacts = await getContacts();
 (contacts as ContactType[]).unshift(contact);
 await set(contacts);
 return contact;
}

// ANCHOR The types here are temporal
export async function getContact(id?: unknown) {
 await fakeNetwork(`contact:${id}`);
 const contacts = await localforage.getItem('contacts');
 const contact = (contacts as ContactType[]).find(
  (c: { id: string }) => c.id === id
 );
 return contact ?? null;
}

// ANCHOR Here we find an element inside the 'contacts' object inside the 'localforage'. We change it and then we update the older 'contacts' object with the new one.
export async function updateContact(id?: string, updates?: unknown) {
 await fakeNetwork();
 const contacts = await localforage.getItem('contacts');
 console.log(contacts);
 const contact = (contacts as ContactType[]).find(
  (c: { id: string }) => c.id === id
 );
 if (!contact) throw new Error(`No contact found for ${id}`);
 Object.assign(contact, updates);
 await set(contacts);

 return contact;
}

// ANCHOR The types here are temporal
export async function deleteContact(id?: string) {
 const contacts = await localforage.getItem('contacts');
 const index = (contacts as { id: string }[]).findIndex(
  (c: { id: string }) => c.id === id
 );
 if (index > -1) {
  (contacts as ContactType[]).splice(index, 1);
  await set(contacts);
  return true;
 }
 return false;
}
