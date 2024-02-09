"use client";

import { todos } from "../data";

export type TodoProps = {
  id: number;
  content: string;
  user_id: number;
};

 const Todo: React.FC<{ todo: TodoProps }> = ({ todo }) => {
  return (
    <>
      <ul className="grid w-full divide-y border border-neutral-700">
        <li className="flex items-center justify-between w-full text-lg group/item hover:bg-slate-400">
          <span className="p-2">{todo.content}</span>
          <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible group-hover/edit:translate-x-0.5">

          </span>
        </li>
      </ul>
    </>
  );
};

export default Todo;
