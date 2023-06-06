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
                <Route path="/somePath" element={Component1}>
                <Route path="/anotherPath" element={Component2}>`}
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
                <Route path="/somePath" element={Component1}>
                <Route path="/anotherPath" element={Component2}>`}
   >
    How do we create a Link on ReactRouter
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