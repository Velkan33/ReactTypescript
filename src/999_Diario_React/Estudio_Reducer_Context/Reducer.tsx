import { Dispatch, InitialState } from "./ContextStateProvider";

export default function MyReducer(draft: InitialState, action: Dispatch) {
 switch (action.type) {
  case "handleCheck":
   {
    let element = draft.initialTasks.find((el) => el.id === action.id);
    if (element !== undefined) element.done = !element.done;
   }
   break;
  case "changeText":
   {
    //TODO - Fix Bug
    if (action.id === undefined || action.newText === undefined) break;
    let elem = draft.initialTasks.find((el) => el.id === action.id);
    elem && (elem.text = action.newText);
   }
   break;
  case "delete":
   {
    if (action.id === undefined) break;
    draft.initialTasks = draft.initialTasks.filter((el) => el.id !== action.id);
   }
   break;
  case "createNew":
   {
    console.log(action);
    if (action.id !== undefined && action.newText !== undefined) {
     draft.initialTasks.push({
      id: action.id,
      text: action.newText,
      done: false,
     });
    }
   }
   break;
  default: {
   console.warn("Ocurrio algun tipo de error");
  }
 }
}
