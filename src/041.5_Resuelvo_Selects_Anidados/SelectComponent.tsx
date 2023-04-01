import React, { Dispatch, SetStateAction } from 'react';

type Types = {
 placeholderText: string;
 arrayData: [] | null | undefined;
 idName: string;
 label: string;
 handleStateChange?: Dispatch<SetStateAction<string | null>>;
};

function SelectComponent({
 placeholderText,
 arrayData,
 idName,
 label,
 handleStateChange,
}: Types) {
 function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
  if (handleStateChange === undefined) return;
  handleStateChange(e.target.value);
 }
 return (
  <label htmlFor={idName} className="px-1 py-1">
   <span className=" inline-block w-20">{label}</span>
   <select
    id={idName}
    name={idName}
    onChange={handleChange}
    className="text-gray-600"
   >
    <option value="_empty">{placeholderText}</option>
    {arrayData !== null &&
     arrayData !== undefined &&
     arrayData.map((el) => (
      <option key={el} value={el}>
       {el}
      </option>
     ))}
   </select>
  </label>
 );
}
export default SelectComponent;

SelectComponent.defaultProps = {
 handleStateChange: undefined,
};
