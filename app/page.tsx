'use client'
import todoData from './data/todos.json'
import {JSX, useState} from "react";
import TodoList from "@/app/components/TodoList";
import ITodo from "@/app/interfaces/IToDo";


export default function Home() : JSX.Element {
    const [todos, setTodos] = useState<ITodo[]>(

        todoData.map(todo => ({
            ...todo,
            startDate: new Date(todo.start_date),
            endDate: new Date(todo.end_date),
        }))
    );
    const handleRemove = (id:number)=>{
      setTodos(todos.filter(t=>t.id!==id))

  };
    const handleDescription =(description:string)=>{

    }
  return (

      <TodoList
      todos={todos}
      onRemoveTodo={handleRemove}
      onDescriptionTodo={handleDescription}
      />

  );
}
