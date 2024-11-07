import {JSX} from "react";

interface TodoProps {
    id: number
    name: string
    startDate: Date
    endDate: Date
    description: string
    onRemove: (id:number)=>void
}

export default function Todo({id, name, startDate, endDate, description, onRemove = f=>f}: TodoProps): JSX.Element{
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}