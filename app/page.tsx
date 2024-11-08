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
            description: todo.description
        }))
    );
    const [selectedToDo, setSelectedTodo] = useState<ITodo|null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const handleRemove = (id:number)=>{
      setTodos(todos.filter(t=>t.id!==id))

  };
    const handleDescription =(todo:ITodo)=>{
        setSelectedTodo(todo)
    }
    const handleCloseDescription =()=>{
        setSelectedTodo(null)
    }
    const handleChangeCategory =()=>{

    }

    const filteredCategories = Array.from(new Set(todos.map(todo=>todo.category)))
  return (
<>
      <TodoList
      todos={todos}
      onRemoveTodo={handleRemove}
      onDescriptionTodo={handleDescription}
      />
    {selectedToDo && (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h2>{selectedToDo.name}</h2>
                <p>{selectedToDo.description}</p>
                <button onClick={handleCloseDescription}>[zamknij]</button>
            </div>
        </div>
    )}

</>

  );
}
const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
    textAlign: 'center',
    color: 'black'
};