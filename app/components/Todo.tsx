'use client'
import {JSX} from "react";
import {FaTrash} from "react-icons/fa";
import IToDoProps from "@/app/interfaces/IToDoProps";




export default function Todo({id, name, startDate, endDate, description, onRemove = f=>f, onDescription = f=>f}: IToDoProps): JSX.Element{
    console.log(`startDate: ${startDate} endDate: ${endDate}`)
    return (
        <div>
            <h1>{name}</h1>
            <p>data rozpoczęcia zadania: {startDate.toLocaleDateString()}</p>
            <p>data zakończenia zadania: {endDate.toLocaleDateString()}</p>
            <button onClick={()=>onRemove(id)}><FaTrash/></button>
            <button onClick={()=>onDescription(description)}>pokaż opis</button>
        </div>
    )
}