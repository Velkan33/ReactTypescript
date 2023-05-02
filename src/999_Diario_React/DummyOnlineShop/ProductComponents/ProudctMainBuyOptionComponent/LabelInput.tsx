import React from 'react';

export default function LabelInput({
 amount,
 handler,
}: {
 amount: number | string;
 handler: React.ChangeEventHandler<HTMLInputElement>;
}) {
 return (
  <label
   htmlFor={`radio${amount}`}
   className="border-b hover:border-black pl-2 flex gap-1 md:text-base text-xl"
  >
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
