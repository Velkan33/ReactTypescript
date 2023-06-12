import React, { useState } from 'react';

type EventHandler = React.ChangeEventHandler<HTMLInputElement>;

interface DataElem {
 category: string;
 price: string;
 stocked: boolean;
 name: string;
}

const data = [
 { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
 { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
 { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
 { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
 { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
 { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
function SearchBar({
 onChange,
 onCheck,
}: {
 onChange: EventHandler;
 onCheck: EventHandler;
}) {
 if (onChange === undefined || onCheck === undefined)
  return <p>SearchBar error</p>;
 return (
  <form>
   <label htmlFor="inStock">
    <input
     placeholder="Search..."
     name="search"
     onChange={onChange}
     style={{ color: 'black' }}
     autoComplete="off"
    />
    <br />
    <input
     type="checkbox"
     id="inStock"
     name="inStock"
     defaultValue="false"
     onChange={onCheck}
    />
    Only show products in stock
   </label>
  </form>
 );
}
function Vegetables({ search }: { search: string }) {
 if (search === undefined) return <p>Vegetable Error</p>;
 let list: DataElem[] | [] = [];
 if (search !== undefined) {
  list = data.filter(
   (e) => e.name.toLowerCase().includes(search) && e.category === 'Vegetables'
  );
 }

 return (
  <>
   {list.length !== 0 && <h3>Vegetables</h3>}
   <ul>
    {list.map((e) => (
     <li key={e.name}>{e.name}</li>
    ))}
   </ul>
  </>
 );
}
function Fruits() {
 return <ul />;
}

function ProductTable({ search: mySearch }: { search: string }) {
 return (
  <>
   <p style={{ display: 'inline' }}>Name</p>
   <p style={{ display: 'inline' }}>Price</p>
   <Fruits />
   <Vegetables search={mySearch} />
  </>
 );
}
export default function MyApp() {
 const [inStock, setInStock] = useState<boolean>(false);
 const [search, setSearch] = useState<string>('');
 const handleSearch: EventHandler = (e) => {
  setSearch(e.target.value);
 };
 const handleStock: EventHandler = (e) => {
  setInStock(!inStock);
 };
 return (
  <>
   <h2>My App</h2>
   <SearchBar onChange={handleSearch} onCheck={handleStock} />
   <ProductTable search={search} />
  </>
 );
}
