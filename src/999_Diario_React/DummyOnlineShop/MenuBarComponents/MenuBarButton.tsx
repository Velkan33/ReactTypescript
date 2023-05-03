import { useMyDispatch, useMyState } from '../ReducerContext';

export default function MenuBarButton({
 textContent,
 id,
}: {
 textContent: string;

 id: number;
}) {
 const state = useMyState();
 const dispatch = useMyDispatch();

 if (state === null || dispatch === null) return <p>Error en el context</p>;
 const { menuOpen } = state;
 const handleInteraction = () => {
  if (menuOpen !== null && menuOpen === id) {
   dispatch({ type: 'CLEAR_MENU_OPEN' });
  } else if (menuOpen === null || (menuOpen !== null && menuOpen !== id)) {
   dispatch({ type: 'SET_MENU_OPEN', value: id });
  }
 };

 return (
  <div>
   <button
    type="button"
    data-id="menuButton"
    className="bg-white text-gray-700 hover:text-black hover:bg-gray-100/75 px-3  py-2 rounded-md  my-2 active:outline-[1px] active:outline-dashed active:outline-black  text-center"
    onClick={handleInteraction}
    onKeyDown={handleInteraction}
   >
    {textContent}
   </button>
  </div>
 );
}
