import React from 'react';

export default function InputForm() {
 return (
  <form>
   <input type="text" placeholder="nombre" />
   <input type="text" placeholder="constelacion" />
   <input type="submit" value="Agregar" />
   <input type="button" value="Limpiar" />
  </form>
 );
}
