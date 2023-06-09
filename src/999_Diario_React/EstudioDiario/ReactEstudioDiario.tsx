import React from 'react';

export default function ReactEstudioDiario() {
 return (
  <div className="font-normal text-base px-2">
   <p
    title="
After the return insert the ReactDom.createPortal function that will accept 2-3 parameter been the last one optional. The first one will be the Component, the second one the Element where we will insert that element, and the last-one will be the optional Key.
"
   >
    How do we insert a component inside another element in the HTML through a
    portal
   </p>
   <p
    title={`<BrowserRouter>
              <Routes>
                <Route path="/somePath" element={Component1} />
                <Route path="/anotherPath" element={Component2} />`}
   >
    How do we envolve all the base ReactRouter structure
   </p>
   <p
    title={`<BrowserRouter>
              <nav>
                <Link to="/pathToLink">
                 {buttonComponent}
                </Link>
              </nav>
              <Routes>
                <Route path="/somePath" element={Component1} />
                <Route path="/anotherPath" element={Component2} />

//----//----//----//
NavLink have a parameter 'isActive' that can be used to apply styles.

<NavLink
     to="/react"
     className={({ isActive }) =>
      isActive ? ' shadow-md shadow-black/40 rounded -translate-y-0.5' : ''
     }
    >`}
   >
    How do we create a Link on ReactRouter, and what`s the difference betwen a
    Link and a NavLink
   </p>

   <p
    title={`<BrowserRouter>
              <nav>
                <Link to="/pathToLink">
                 {buttonComponent}
                </Link>
              </nav>
              <Routes>
                <Route path="/somePath" element={Component1} /> 
                <Route path="*" element={
                <ErrorComponent/>} />`}
   >
    How do we manage an inexistent link address
   </p>
   <p
    title={`<BrowserRouter>
              <nav>
                <Link to="/pathToLink">
                 {buttonComponent}
                </Link>
              </nav>
              <Routes>
                <Route path="/newPath" element={Component1} />
                <Route path="/oldPath" element={<Navigate to="/newPath />} />`}
   >
    How do we redirect an old link or an old address to a new one.
   </p>
   <p
    title="You could use the 'Link' component inside any component, and then you could detect the 'product/2' number 2 with ':' and the key you will give it 'product/:id' on the 'Routes'. After that you can detect the value of the 'id' key with the custom hook 'useParams',that will return {id: 2}.

    <Link to={/products/{dinamicValue}} >2</Link>
    //-----//----//----//
    <Route path='/products/:id' element={<ProductDetail />} />
    //----//----//----//
    console.log(useParams()) => {id: dinamicValue}
"
   >
    How you create a dynamic url, and how do you use that url on the Routes
    component.
   </p>
   <p
    title={`const navigate = useNavigate;
           onClick={() => navigate(-1)};
           The parameter pased to navigate
           could be any number indicating the 
           amount of pages, '-' for back and 
           positive to forward.`}
   >
    How do we wire a button to go back one page, using a custom hook from
    react-router library.
   </p>
   <p
    title={`<Route path="/services" element={<Services />}>
                     {/** index indicate that the component will be called the same path than the parent*/}
                 <Route index element={<ServicesHome />} />
                     {/** Next path also could be writen just, guarantee, because he asume it comes after services */}
                 <Route path="/services/guarantee" element={<ServicesGuarantee />} />

//----//----//----//
{/** The Outlet component is like the children parameter, there it will call the component that you call that is nested*/}

import {Outlet} from 'react-router-dom'
function Services(){
       return ( <>
                  <h1>This is the service component</h1>
                  <Outlet/>
                </>)
}
     </Route>
`}
   >
    How do we create routes and subroutes using route nesting.
   </p>
   <p title="We can use 'HashRouter' instead of 'BrowserRouter' to give access to those saved Url, other way unable to access">
    How we solve routers url, that can not be wired via backend
   </p>
   <p
    title={`const myArray = ['Ana','Sofia','Vero']
           const newArray = myArray.with(index, newValue)
           const newArray = myArray.toSorted()
           const newArray = myArray.toReversed()
           const newArray = myArray.toSpliced(0,1,'Kevin')`}
   >
    What are the 4 new array methods on javascript
   </p>
   <p
    title={`const controler = new AbortController()
            fetch(url, { signal : controller.signal })
            return () => controler.abort()`}
   >
    How do we implement a abortControler
   </p>
  </div>
 );
}
