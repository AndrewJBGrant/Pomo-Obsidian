import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";

export default function RightSide() {
  return (
    <aside className="col-start-7 col-end-9 m-2 fixed">

        <PomoDoroTimer />



        <div className="p-4 text-center border-4">HERE A NEW TODO</div>
        <div className="fixwd overflow-y-auto h-96">
        <AllTodos />

        </div>


    </aside>
  );
}
