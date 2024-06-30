import React, { useState } from "react";
import Inputfiled from "./component/Inputfiled";
import Todo from "./modal";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string>("");
  const [todo, settodo] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      settodo([{ id: Date.now(), isDone: false, todos: todos }, ...todo]);
      setTodos("");
    }
  };

  console.log(todo);
  return (
    <div>
      <Inputfiled todos={todos} setTodos={setTodos} handleAdd={handleAdd} />
      <TodoList todo={todo} settodo={settodo} />
    </div>
  );
};

export default App;
