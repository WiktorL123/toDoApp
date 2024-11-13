'use client'
import Todo from "@/app/components/Todo";
import IToDoListProps from "@/app/interfaces/IToDoListProps";


export default function TodoList({todos =[], onRemoveTodo = f=> f, onEditTodo=f=>f, onDescriptionTodo = f=>f }: IToDoListProps){
    if (!todos.length) return <p className={'error-p'}>nie zanaleziono zadań do wykonania</p>

    return (
        <div className={'todo-list-div'}>
            {todos.map((todo, index) => (
                <div key={index}  className={'todo-container'}>
                    <Todo
                        {...todo}
                        onRemove={onRemoveTodo}
                        onEdit={onEditTodo}
                        onDescription={onDescriptionTodo}
                    />
                </div>
            ))}
        </div>
    );
}