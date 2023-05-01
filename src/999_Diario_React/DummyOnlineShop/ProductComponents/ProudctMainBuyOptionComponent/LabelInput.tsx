import React from 'react';

export default function LabelInput({
 amount,
 handler,
}: {
 amount: number | string;
 handler: React.ChangeEventHandler<HTMLInputElement>;
}) {
 return (
  <label htmlFor={`radio${amount}`} className="border pl-2 flex gap-1">
   <input
    id={`radio${amount}`}
    type="radio"
    onChange={handler}
    value={amount}
    name="amount"
   />
   <span>{amount}</span>
  </label>
 );
}
