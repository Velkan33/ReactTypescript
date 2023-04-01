import React from "react";

export default function HeroImg() {
 return (
  <div>
   <figure>
    <img
     className={`h-[80vh] w-[85vw] max-w-[1333px] object-cover`}
     src="https://ableton-production.imgix.net/about/header.jpg?auto=format&dpr=2&fit=crop&fm=jpg&h=435&ixjsv=1.1.3&q=50&w=655"
    />
   </figure>
  </div>
 );
}
