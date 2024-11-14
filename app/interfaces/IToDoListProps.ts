import ITodo from "@/app/interfaces/IToDo";

export default interface IToDoListProps{
    todos: ITodo[]
    onRemoveTodo: (id:number)=>void
    onEditTodo: (todo: ITodo)=>void
    onDescriptionTodo: (todo:ITodo)=>void
}