import React, { forwardRef } from 'react';
import { useImmer } from 'use-immer';

export default forwardRef(function InputEdit(
 props: {
  text: string;
  handleSave: (e: React.ChangeEvent<HTMLInputElement>) => void;
 },
 ref: React.LegacyRef<HTMLInputElement>
) {
 const { handleSave, text } = props;
 const [myText, updateMyText] = useImmer(text);

 const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  updateMyText(e.target.value);
  handleSave(e);
 };

 return (
  <input type="text" value={myText} onChange={handleTextChange} ref={ref} />
 );
});
