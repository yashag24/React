import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return; // Prevent adding empty or whitespace-only todos

    addTodo({ todo: todo.trim(), completed: false });
    setTodo(""); // Clear input after adding
  };

  return (
    <form onSubmit={add} className="flex">
      {/* Input field for new todo */}
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      {/* Submit button to add new todo */}
      <button
        type="submit"
        aria-label="Add Todo"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
