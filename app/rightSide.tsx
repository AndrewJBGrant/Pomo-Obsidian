import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";

export default function RightSide() {
  return (
    <aside className="col-start-7 col-end-9 m-2 fixed border-l rounded-md">
      <PomoDoroTimer />

       <div className="text-center">HERE A NEW TODO</div>
       <div className="overflow-y-auto h-96">
         <AllTodos />
       </div>
 </article>
 </div>



</>
  );
}
