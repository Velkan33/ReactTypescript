interface SyntheticEvent {
 nativeEvent: Event;
 target: EventTarget;
}
interface MyProps {
 myOnClick: (arg: SyntheticEvent) => void;
}
//SECTION - Le pasamos el metodo a asignar al evento on click dentro de las props
// export function Button(props: MyProps) {
//  return (
//   <button
//    onClick={props.myOnClick}
//    className="bg-violet-500 text-white px-6 py-2 text-xl"
//   >
//    Saludar Externo
//   </button>
//  );
// }
//NOTE Destructurando las props
export function Button({ myOnClick }: MyProps) {
 return (
  <button
   onClick={myOnClick}
   className="bg-violet-500 text-white px-6 py-2 text-xl"
  >
   Saludar Externo
  </button>
 );
}
