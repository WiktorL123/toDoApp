'use client'
import { JSX } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import IToDoProps from "@/app/interfaces/IToDoProps";
import '../../globals.css'

export default function Todo({
                                 id,
                                 name,
                                 startDate,
                                 endDate,
                                 category,
                                 description,
                                 onRemove = f => f,
                                 onDescription = f => f,
                                 onEdit = f => f
                             }: IToDoProps): JSX.Element {
    console.log('category', category);

    return (
        <>
            <h1 className={'todo-heading'}>{name}</h1>
            <p className={'todo-p'}>
                data rozpoczęcia zadania: {startDate ? startDate.toLocaleDateString() : "Brak daty rozpoczęcia"}
            </p>
            <p className={'todo-p'}>
                data zakończenia zadania: {endDate ? endDate.toLocaleDateString() : "Brak daty zakończenia"}
            </p>
            <p className={'todo-p'}>kategoria: {category}</p>
            <button onClick={() => onRemove(id)} className={'todo-button'}><FaTrash /></button>
            <button onClick={() => onEdit({ id, name, startDate, endDate, category, description })}>
                <FaPencilAlt /></button>
            <button onClick={() => onDescription({ id, name, startDate, endDate, category, description })} className={'todo-button'}>
                pokaż opis
            </button>
        </>
    );
}
