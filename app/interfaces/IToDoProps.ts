import ITodo from "@/app/interfaces/IToDo";

export default interface IToDoProps {
    id: number
    name: string
    startDate: Date
    endDate: Date
    category: string
    description: string
    onRemove: (id:number)=>void
    onDescription:(todo:ITodo)=>void
}