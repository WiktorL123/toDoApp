export default interface IToDoProps {
    id: number
    name: string
    startDate: Date
    endDate: Date
    description: string
    onRemove: (id:number)=>void
    onDescription:(description:string)=>void
}