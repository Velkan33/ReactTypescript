import React, { useState } from "react";
import { Classes } from "../assets/Classes";

type EventHandler = React.ChangeEventHandler<HTMLInputElement>;

interface MyProps {
 onChange?: EventHandler;
 onCheck?: EventHandler;
 search?: string;
}
interface DataElem {
 category: string;
 price: string;
 stocked: boolean;
 name: string;
}

let data = [
 { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
 { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
 { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
 { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
 { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
 { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function MyApp() {
 const [inStock, setInStock] = useState<boolean>(false);
 const [search, setSearch] = useState<string>("");
 let handleSearch: EventHandler = (e) => {
  setSearch(e.target.value);
 };
 let handleStock: EventHandler = (e) => {
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
function SearchBar(props: MyProps) {
 return (
  <>
   <form>
    <input
     placeholder="Search..."
     name="search"
     onChange={props.onChange}
     style={{ color: "black" }}
     autoComplete="off"
    ></input>
    <br />
    <input
     type="checkbox"
     id="inStock"
     name="inStock"
     defaultValue="false"
     onChange={props.onCheck}
    ></input>
    <label htmlFor="inStock">Only show products in stock</label>
   </form>
  </>
 );
}
function ProductTable(props: MyProps) {
 return (
  <>
   <p style={{ display: "inline" }}>Name</p>
   <p style={{ display: "inline" }}>Price</p>
   <Fruits search={props.search} />
   <Vegetables search={props.search} />
  </>
 );
}
function Vegetables(props: MyProps) {
 let list: DataElem[] | [] = [];
 if (props.search !== undefined) {
  list = data.filter(
   (e) =>
    e.name.toLowerCase().includes(props.search!) && e.category === "Vegetables"
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
function Fruits(props: MyProps) {
 return (
  <>
   <ul></ul>
  </>
 );
}
