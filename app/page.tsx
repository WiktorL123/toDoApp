'use client';
import todoData from './data/todos.json';
import React, { JSX, useState } from "react";
import TodoList from "@/app/components/TodoList/TodoList";
import ITodo from "@/app/interfaces/IToDo";
import Filter from "@/app/components/Filter/Filter";
import EditTodoForm from "@/app/components/EditTodoForm/EditTodoForm";




export default function Home() : JSX.Element {
    const [todos, setTodos] = useState<ITodo[]>(

        todoData.map(todo => ({
            ...todo,
            startDate: new Date(todo.start_date),
            endDate: new Date(todo.end_date),
            description: todo.description
        }))
    );
    const [selectedToDo, setSelectedTodo] = useState<ITodo | null>(null);
    const [editingTodo, setEditingTodo] = useState<ITodo | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const handleRemove = (id: number) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const handleDescription = (todo: ITodo) => {
        setSelectedTodo(todo);
    };

    const handleCloseDescription = () => {
        setSelectedTodo(null);
    };

    const handleEdit = (todo: ITodo) => {
        setEditingTodo(todo);
    };

    const handleSaveEdit = (updatedTodo:ITodo)=>{
        setTodos(todos.map(todo=>todo.id===updatedTodo.id ? updatedTodo : todo));
        setEditingTodo(null)
    }
    const handleCancelEdit = () =>{
        setEditingTodo(null);
    }

    const filteredCategories = Array.from(new Set(todos.map(todo => todo.category)));

    const handleChangeCategory = (category: string) => {
        setSelectedCategory(category);
    };


    const filteredTodos = selectedCategory !== 'all'
        ? todos.filter(todo => todo.category === selectedCategory)
        : todos;

    return (
        <>

            <Filter
                categories={filteredCategories}
                selectedCategory={selectedCategory}
                onChangeCategory={handleChangeCategory}
            />
            <TodoList
                todos={filteredTodos}
                onRemoveTodo={handleRemove}
                onDescriptionTodo={handleDescription}
                onEditTodo={handleEdit}
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

            {editingTodo && (
                <EditTodoForm
                todo={editingTodo}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}


                />
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
    color: 'black',
};