'use client'
import Todo from "@/app/components/Todo";
import IToDoListProps from "@/app/interfaces/IToDoListProps";


export default function TodoList({todos =[], onRemoveTodo = f=>f, onDescriptionTodo = f=>f }: IToDoListProps){
    if (!todos.length) return <div>nie zanaleziono zadań do wykonania</div>

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <Todo
                        {...todo}
                        onRemove={onRemoveTodo}
                        onDescription={onDescriptionTodo}
                    />
                </div>
            ))}
        </div>
    );
}