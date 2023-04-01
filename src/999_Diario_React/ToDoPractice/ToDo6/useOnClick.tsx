import React, { useEffect } from 'react';

interface CustomInterface {
 myInputRef: React.MutableRefObject<null>;
 mySaveRef: React.MutableRefObject<null>;
 updateIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function sal() {}
export function useOnClick({
 myInputRef,
 mySaveRef,
 updateIsEditing,
}: CustomInterface) {
 useEffect(() => {
  function handleClick(e: MouseEvent) {
   e.stopPropagation();
   if (e.target !== myInputRef.current && e.target !== mySaveRef.current) {
    updateIsEditing(() => false);
   }
  }
  document.addEventListener('click', handleClick);

  return () => {
   document.removeEventListener('click', handleClick);
  };
 }, [myInputRef, mySaveRef, updateIsEditing]);
}
