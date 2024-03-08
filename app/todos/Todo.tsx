"use client";

import renderLinks from "../HighlightLinks";
import { todos } from "../data";
import TodoLi from "./TodoLi";

export type TodoProps = {
  id: number;
  content: string;
  user_id: number;
};

 const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  return (
    <ol>
   {todos.map((todo) => (
        <TodoLi key={todo.id} title={todo.content}>
          </TodoLi>
      ))}
    </ol>
  );
};

export default Todo;

      //  className="divide-y border border-neutral-700">
      //   <li className="flex items-center justify-between w-full text-lg group/item hover:bg-slate-400">
      //     <p className="p-4" dangerouslySetInnerHTML={{__html: renderLinks(todo.content)}}></p>
      //   </li>
