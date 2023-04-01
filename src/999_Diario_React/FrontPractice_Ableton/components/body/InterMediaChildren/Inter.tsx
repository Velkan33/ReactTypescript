import React from "react";

export function Inter1() {
 return (
  <div
   className={`
     h-[min(60vw,960px)] relative flex items-center
    `}
  >
   <figure className={`w-[min(40vw,640px)] ml-[min(8vw,128px)]`}>
    <img
     className={`w-full`}
     src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=2&fit=crop&h=328&ixjsv=1.1.3&q=50&w=328"
    />
   </figure>
   <figure className={`ml-[min(8vw,128px)] w-[min(34vw,544px)]`}>
    <img
     className={`w-full`}
     src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=2&fit=crop&h=197&ixjsv=1.1.3&q=50&w=262"
    />
   </figure>

   <div
    className={`
   bg-[#fbffa7] w-[60%] h-full absolute right-0 top-0 -z-10
  `}
   ></div>
  </div>
 );
}

export function Inter2() {
 return (
  <>
   {/*  pt-[56.25%]*/}
   <figure
    className={`block mx-auto xl:max-w-[45%] md:max-w-[70%] max-w-[80%] h-[min(40vw,450px)] overflow-hidden relative border `}
   >
    <iframe
     className={`
      absolute top-0 left-0 right-0 bottom-0 h-full w-full
     `}
     src="https://www.youtube.com/embed/9SbnhgjeyXA"
     title="YouTube video player"
     frameBorder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowFullScreen
     loading="lazy"
    ></iframe>
    <figcaption>Why Ableton - Juanpe Bolivar</figcaption>
   </figure>
   <p
    className={`text-xs block mx-auto xl:max-w-[45%] md:max-w-[70%] max-w-[80%] overflow-hidden relative `}
   >
    Why Ableton - Juanpe Bolivar
   </p>
  </>
 );
}

export function Inter3() {
 return (
  <>
   <div
    className={`
  w-full h-[min(75vw,1200px)] relative grid grid-cols-2 grid-rows-2 gap-[min(8vw,133px)] px-[min(8vw,133px)] py-[min(8vw,133px)] border
 `}
   >
    <div
     className={`
    bg-[#b6ffc0] w-[58%] h-full absolute -z-40 left-0 
   `}
    ></div>
    <figure
     className={`
     col-start-1 col-span-1 row-start-1 row-span-1
    `}
    >
     <img
      className={`
      w-full h-full object-cover
     `}
      src="https://ableton-production.imgix.net/about/photo-3.jpg?dpr=2&fit=crop&h=213&ixjsv=1.1.3&q=50&w=283"
     />
    </figure>
    <figure
     className={`
     col-start-1 col-span-1 row-start-2 row-span-1
    `}
    >
     <img
      className={`
      w-full h-full object-cover
     `}
      src="https://ableton-production.imgix.net/about/photo-4.jpg?dpr=2&fit=crop&h=213&ixjsv=1.1.3&q=50&w=283"
     />
    </figure>
    <figure
     className={`
     col-start-2 col-span-1 row-start-1 row-span-2 flex items-center
    `}
    >
     <img
      className={`
      w-full
     `}
      src="https://ableton-production.imgix.net/about/photo-5.jpg?dpr=2&fit=crop&h=354&ixjsv=1.1.3&q=50&w=354"
     />
    </figure>
   </div>
  </>
 );
}

export function Inter4() {
 return (
  <figure
   className={`
   mx-[min(8vw,133px)]
  `}
  >
   <img
    className={`w-full h-auto`}
    src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?auto=format&dpr=2&fit=crop&fm=jpg&ixjsv=1.1.3&q=50&w=708"
   />
  </figure>
 );
}

export function Inter5() {
 return (
  <>
   <div
    className={`
    grid grid-cols-2 relative h-[min(933px,58vw)] gap-[min(267px,16.6vw)] items-center
   `}
   >
    <div
     className={`
 block absolute justify-self-center bg-[#d5b3ff] w-[66.6%] h-full -z-40
`}
    ></div>
    <figure className={`pl-[min(8.3vw,133px)]`}>
     <img
      className={`
       row-start-1 row-span-1 col-start-1 col-end-2 object-cover
      `}
      src={`https://ableton-production.imgix.net/about/photo-6-a.jpg?dpr=2&fit=crop&h=213&ixjsv=1.1.3&q=50&w=283`}
     />
    </figure>
    <figure>
     <img
      className={`
       row-start-1 row-span-1 col-start-2 col-end-3 object-cover
      `}
      src={`https://ableton-production.imgix.net/about/photo-7.jpg?dpr=2&fit=crop&h=354&ixjsv=1.1.3&q=50&w=354`}
     />
    </figure>
   </div>
  </>
 );
}

export function Inter6() {
 return (
  <>
   <div
    className={`
flex relative mx-[min(8vw,133px)] xl:h-[min(41.68vw,667px)] flex-col xl:flex-row mb-[min(8vw,133px)]
   `}
   >
    <figure className={`xl:w-[50%] w-full h-full`}>
     <img
      className={`w-full h-full object-cover object-right`}
      src={`https://ableton-production.imgix.net/about/photo-8.jpg?crop=right&dpr=2&fit=crop&h=425&ixjsv=1.1.3&q=50&w=708`}
     />
    </figure>
    <div
     className={`bg-[#b1c5ff] xl:w-[50%] w-full  flex flex-col justify-center xl:px-[min(8.34vw,133px)] p-[10%]`}
    >
     <p className={`text-2xl font-bold pb-6 leading-10`}>
      We’re really proud of the work we’ve done so far. But there’s so much more
      to come. If you’d like to be a part of it, please join us.
     </p>
     <a href="#" className={`text-blue-700 text-2xl font-bold`}>
      See latest jobs &gt;
     </a>
    </div>
   </div>
  </>
 );
}
