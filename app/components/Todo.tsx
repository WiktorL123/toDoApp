'use client'
import {JSX} from "react";
import {FaTrash} from "react-icons/fa";
import IToDoProps from "@/app/interfaces/IToDoProps";




export default function Todo({id, name, startDate, endDate, category, description, onRemove = f=>f, onDescription = f=>f}: IToDoProps): JSX.Element{
    console.log('category',category)
    return (
        <>
            <h1 className={'todo-heading'}>{name}</h1>
            <p className={'todo-p'}>data rozpoczęcia zadania: {startDate.toLocaleDateString()}</p>
            <p className={'todo-p'}>data zakończenia zadania: {endDate.toLocaleDateString()}</p>
            <p className={'todo-p'}>typ zadania: {category}</p>
            <button onClick={()=>onRemove(id)} className={'todo-button'}><FaTrash/></button>
            <button onClick={() => onDescription({id, name, startDate, endDate, category, description})} className={'todo-button'}>pokaż opis
            </button>
        </>
    )
}