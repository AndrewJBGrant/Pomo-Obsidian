import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";

export default function RightSide() {
  return (
    <aside className="col-start-7 col-end-9 fixed m-2">
      <PomoDoroTimer />
      <AllTodos />
    </aside>
  );
}
