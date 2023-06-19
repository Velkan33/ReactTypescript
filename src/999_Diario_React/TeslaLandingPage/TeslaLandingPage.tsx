import React from 'react';
// import teslaLogo from './assets/tesla.svg';
import teslaVideo from './assets/teslaLanding.webm';

function TeslaSVG({ className }: { className: string }) {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   id="Layer_1"
   viewBox="0 0 278.7 36.3"
   className={className}
  >
   <g id="TESLA">
    <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3" />
    <g>
     <path d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
    </g>
   </g>
  </svg>
 );
}

export default function TeslaLandingPage() {
 return (
  <>
   <video
    className="-z-50 absolute min-h-[max(100vh,48rem)] w-screen object-cover"
    autoPlay
    loop
   >
    <source src={teslaVideo} />
    <track kind="captions" />
   </video>

   <header className="absolute top-0 bg-transparent text-white px-6 py-3 flex justify-between [&>div]:grow  min-w-full [&>*]:flex [&>*]:items-center">
    <div className="basis-1/4">
     <a href="/">
      <TeslaSVG className="h-10 px-3 py-3 fill-white" />
     </a>
    </div>
    <div className="justify-center basis-2/4">
     <ul className=" [&>li>a]:rounded-xl [&>li>a]:py-3 [&>li>a]:px-4 [&>li>a:hover]:bg-gray-800/50 flex">
      <li>
       <a href="/">Model S</a>
      </li>
      <li>
       <a href="/">Model 3</a>
      </li>
      <li>
       <a href="/">Model X</a>
      </li>
      <li>
       <a href="/">Model Y</a>
      </li>
      <li>
       <a href="/">Powerwall</a>
      </li>
      <li>
       <a href="/">Carga</a>
      </li>
     </ul>
    </div>
    <div className="justify-end basis-1/4">
     <ul className=" [&>li>a:hover]:bg-gray-200 flex [&>li>a]:px-2 [&>li>a]:py-1 [&>li>a]:rounded-xl">
      <li>
       <a href="/">Soporte</a>
      </li>
      <li>
       <a href="/">Tienda</a>
      </li>
      <li>
       <a href="/">Menu</a>
      </li>
     </ul>
    </div>
   </header>
   <body>
    <div
     id="Landing video"
     className="min-h-screen w-screen flex flex-col  items-center text-white"
    >
     <h2 className="text-3xl mt-32">Disfruta de Tesla</h2>
     <p className="mt-6">Programe una prueba de conduccion hoy mismo</p>
     <button
      type="button"
      className="mt-[25rem] py-2 px-4 border"
      onClick={() => {}}
     >
      Prueba de conduccion
     </button>
    </div>
   </body>
  </>
 );
}
