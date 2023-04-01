import { useImmerReducer } from "use-immer";
import CompletedTasks from "./CompletedTasks";
import StateDispatchProvider, {
 MyContextDispatch,
 MyContextState,
} from "./ContextStateProvider";
import InputField from "./InputField";
import MyReducer from "./Reducer";
import TaskList from "./TaskList";

export const classes = {
 botton: "p-1 px-4 rounded-lg border bg-violet-600 text-white",
 input: "shadow-md shadow-black/50 border min-w-[20rem]",
 checkbox: "inline",
 text: "inline-block mx-4 text-lg italic min-w-[10rem]",
};

export default function ToDo() {
 return (
  <StateDispatchProvider>
   <>
    <h1 className="text-2xl font-bold">ToDo App</h1>
    <hr />
    <InputField />
    <br />
    <TaskList />
    <CompletedTasks />
   </>
  </StateDispatchProvider>
 );
}
