/*
*TODO:
* 1. Refactor useState for fields of todos
* 2. finish error logic
* 3. Change styles and make it in modules
* 4  Create layout with header and footer for pages
*   4.1 header must contain links with react router for form and todos list
* 5 save todos in local storage
* 6 Remove erros in page.tsx if possible
*
*
*
*  */

import IEditTodoFormProps from "@/app/interfaces/IEditTodoFormProps";
import {useState} from "react";


export default function EditTodoForm({todo, onSave, onCancel, onClose}:IEditTodoFormProps) {
    const [name, setName] = useState<string>(todo.name);
    const [description, setDescription] = useState<string>(todo.description);
    const [startDate, setStartDate] = useState<string>(
        todo.startDate ? todo.startDate.toISOString().substring(0, 10) : ''
    );
    const [endDate, setEndDate] = useState<string>(
        todo.endDate ? todo.endDate.toISOString().substring(0, 10) : ''
    );
    const [category, setCategory] = useState<string>(todo.category);
    const [errors, setErrors] = useState<{[key:string] :string}>({})

    const handleSave = () => {
        const updatedTodo = {
            ...todo,
            name,
            startDate: startDate ? new Date(startDate) : null,
            endDate: startDate ?  new Date(endDate) : null,
            description,
            category
        };
        onSave(updatedTodo);
    };
    const handleValidate = () =>{

    }


    return (
        <div className={'edit-todo-form'}>
            <input value={name} onChange={(e) => setName(e.target.value)}
            placeholder={'nazwa zadania'}/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder={'opis'}/>
            <input value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            <input value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            <input value={category} onChange={(e) => setCategory(e.target.value)}/>
            <button onClick={handleSave}>zapisz</button>
            <button onClick={onCancel}>anuluj</button>
            <button onClick={onClose} onSubmit={handleValidate}>[zamknij]</button>
        </div>
    )
}