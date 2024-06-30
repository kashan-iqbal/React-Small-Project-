import React, { useState } from "react";
import Todo from "../modal";

interface Props {
  todo: Todo[];
  settodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ settodo, todo }: Props) => {
  const [isDialogOpen, setIsDialopOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [id, setId] = useState<number>();

  const HandleDone = (id: number) => {
    return () => {
      settodo(todo.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
    };
  };

  const handleDelete = (id: number) => {
    return () => {
      // const del = todo.filter((t) => t.id !== id);
      settodo((prev) => prev.filter((p) => p.id !== id));
    };
  };

  const handleEdit = (id: number) => {
    return () => {
      setIsDialopOpen((prev) => !prev);
      setId(id);
      console.log("ss");
    };
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    settodo((prev: Todo[]) =>
      prev.map((p) => (p.id === id ?   { ...p, todos: value } : p))
    );
    setValue("");
    setIsDialopOpen((prev) => !prev);
  };
  return (
    <>
      <ul style={{ listStyleType: "square" }}>
        {isDialogOpen && (
          <dialog open>
            <form onSubmit={handleUpdate}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
              />
              <button type="submit">update</button>
            </form>
          </dialog>
        )}
        {todo &&
          todo.map((t) => (
            <li key={t.id}>
              {t.isDone ? (
                <s style={{ backgroundColor: "red" }}>{t.todos}</s>
              ) : (
                <p>{t.todos}</p>
              )}
              <p onClick={handleEdit(t.id)}>eidt</p>{" "}
              <p onClick={handleDelete(t.id)}>del</p>
              <p onClick={HandleDone(t.id)}>done</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
