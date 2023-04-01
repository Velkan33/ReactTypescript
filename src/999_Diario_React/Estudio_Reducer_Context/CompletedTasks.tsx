import { MyStateUse } from "./ContextStateProvider";

export default function CompletedTasks() {
 const state = MyStateUse();
 if (state === null) return <></>;

 let tareasCompletadas = state.initialTasks.filter(
  (el) => el.done !== false
 ).length;
 let tareasTotales = state.initialTasks.length;
 return (
  <p className={"text-center  font-bold"}>
   Tareas Completadas: <i>{tareasCompletadas}</i> de <i>{tareasTotales}</i>
  </p>
 );
}
