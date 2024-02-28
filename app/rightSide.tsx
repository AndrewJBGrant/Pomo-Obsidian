import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";

export default function RightSide() {
  return (
    <aside className="m-2 fixed border-l rounded-md">
      <PomoDoroTimer timerActive={false} />

      <div className="p-4 text-center border-4">HERE A NEW TODO</div>
      <div className="overflow-y-auto h-96">
        <AllTodos />
      </div>
    </aside>
  );
}
