export default interface IToDoListProps{
    todos: Array<{id:number, name:string, startDate: Date, endDate:Date, description: string}>
    onRemoveTodo: (id:number)=>void
    onDescriptionTodo: (description:string)=>void
}