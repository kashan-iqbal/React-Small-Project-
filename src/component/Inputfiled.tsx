import React from "react";

interface Props {
  todos: string ;
  setTodos: React.Dispatch<React.SetStateAction<string >>;
  handleAdd: (e:React.FormEvent<HTMLFormElement>) => void
}

const Inputfiled: React.FC<Props> = ({ todos, setTodos, handleAdd }: Props) => {
  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={todos} onChange={(e) => setTodos(e.target.value)} />
      <button type="submit">done</button>
    </form>
  );
};

export default Inputfiled;
