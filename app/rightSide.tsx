import PomoDoroTimer from "./Timer/Pomodoro";
import AllTodos from "../app/todos/todoData";

export default function RightSide() {
  return (
<>




 <div className="bg-red-400 basis-1/4 relative">
 <article className="fixed">

        <PomoDoroTimer timerActive={false} />

       <div className="text-center">HERE A NEW TODO</div>
       <div className="overflow-y-auto h-96">
         <AllTodos />
       </div>
 </article>
 </div>



</>
  );
}
