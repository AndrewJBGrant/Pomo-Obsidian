"use client";

import { todos } from "../data";
import Todo from "../todos/Todo";

export default function AllTodos() {
  return (
    <section className="items-center justify-between overflow-y-auto">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
