"use client";

import { todos } from "../data";
import Todo from "../todos/Todo";

export default function AllTodos() {
  return (
    <section className="flex flex-col items-center justify-between scroll-overflow">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
