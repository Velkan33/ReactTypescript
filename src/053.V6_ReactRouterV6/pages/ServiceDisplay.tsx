import React from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceDisplay({
 services,
}: {
 services: { id: number; name: string; price: string }[];
}) {
 const actualServiceId = useParams();

 const actualService = services.find(
  (param) => actualServiceId.id?.slice(7) === param.id.toString()
 );
 if (actualService === undefined) return <p>Service Id undefined</p>;
 return (
  <>
   <p>service: {actualService.name}</p>
   <p>price: {actualService.price}</p>
  </>
 );
}
