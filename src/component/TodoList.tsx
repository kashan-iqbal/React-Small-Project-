import React from 'react'
import Todo from '../modal'

interface Props {
  todo: Todo[],
  settodo: React.Dispatch<React.SetStateAction<Todo[]>>

}


const TodoList: React.FC<Props> = ({ settodo, todo }: Props) => {



  const HandleDone = (id: number) => {
    return () => {
      settodo(todo.map((t) => (
        t.id === id ? { ...t, isDone: true } : t
      )))

    }
  }

  return (
    <>
      <ul style={{ listStyleType: "square" }}>{
        todo && todo.map((t) => (
          <li key={t.id} >{t.todos} <p>eidt</p>   <p>del</p>  <p onClick={HandleDone(t.id)}>done</p></li>



        ))
      }
      </ul>


    </>
  )
}

export default TodoList