import ITodo from "@/app/interfaces/IToDo";

export default interface IToDoProps  extends ITodo{
    onEdit: (todo:ITodo)=>void
    onRemove: (id:number)=>void
    onDescription:(todo:ITodo)=>void
}