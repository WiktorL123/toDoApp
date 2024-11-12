import ITodo from "@/app/interfaces/IToDo";

export default interface IToDoListProps{
    todos: Array<{id:number, name:string, startDate: Date, endDate:Date, category:string, description: string}>
    onRemoveTodo: (id:number)=>void
    onEditTodo: (todo: ITodo)=>void
    onDescriptionTodo: (todo:ITodo)=>void
}