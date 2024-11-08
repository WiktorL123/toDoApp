import ITodo from "@/app/interfaces/IToDo";

export default interface IToDoListProps{
    todos: Array<{id:number, name:string, startDate: Date, endDate:Date, category:string, description: string}>
    onRemoveTodo: (id:number)=>void
    onDescriptionTodo: (todo:ITodo)=>void
}