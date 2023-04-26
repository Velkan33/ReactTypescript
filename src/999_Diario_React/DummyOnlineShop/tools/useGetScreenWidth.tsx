import { useEffect, useState } from 'react';

export function screenWidthCategories(pixels: number) {
 let size = 'small';
 if (pixels < 640) size = 'small';
 if (pixels >= 640 && pixels < 1024) size = 'medium';
 if (pixels >= 1024) size = 'large';
 if (pixels >= 1280) size = 'xl';
 return size;
}
export default function useGetScreenWidth() {
 const [width, setWidth] = useState<null | 'small' | 'medium' | 'large' | 'xl'>(
  null
 );

 const onSizeChange = () => {
  const { innerWidth } = window;
  setWidth(
   screenWidthCategories(innerWidth) as 'small' | 'medium' | 'large' | 'xl'
  );
 };
 useEffect(() => {
  window.addEventListener('resize', onSizeChange);
  document.addEventListener('DOMContentLoaded', onSizeChange);
  return () => {
   window.removeEventListener('resize', onSizeChange);
   document.removeEventListener('DOMContentLoaded', onSizeChange);
  };
 });
 return width;
}
