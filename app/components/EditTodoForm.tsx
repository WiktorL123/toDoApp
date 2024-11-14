/*
*TODO:
* 1. Refactor useState for fields of todos -DONE
* 2. finish error logic - STARTED
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
import ITodo from "@/app/interfaces/IToDo";


export default function EditTodoForm({todo, onSave, onCancel, onClose}:IEditTodoFormProps) {



    const [formData, setFormData] = useState({
        name:todo.name,
        description: todo.description,
        startDate: todo.startDate ? todo.startDate.toISOString().substring(0, 10) : '',
        endDate: todo.endDate ? todo.endDate.toISOString().substring(0, 10) : '',
        category: todo.category
    })

    const [errors, setErrors] = useState<{[key:string] :string}>({})

    const handleSave = () => {
        if (handleValidate()){
            const updatedTodo :ITodo = {
                ...todo,
                name: formData.name,
                startDate: formData.startDate ? new Date(formData.startDate) : null,
                endDate: formData.startDate ?  new Date(formData.endDate) : null,
                description: formData.description,
                category: formData.category
            };
            onSave(updatedTodo);
        }

    };

    const handleChange = (field: string, value: string) =>{
        setFormData(prevState =>({
            ...prevState,
            [field] :value
        }))
    }
    const handleValidate = () =>{
            const newErrors:{[key:string] :string} = {}
        if (formData.name.length<4){
            newErrors.name = 'za krotka nazwa zadania!'
            console.log(newErrors.name)
        }

        setErrors(newErrors)
        return Object.keys(newErrors) === 0
    }


    return (
        <div className={'edit-todo-form'}>
            <input
                value={formData.name}
                onChange={(e)=>handleChange("name", e.target.value)}
            />
            {errors.name && <p className={'error-p'}>{errors.name}</p>}
            <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}

            />
            <input value={formData.startDate}
                   onChange={
                (e)=>handleChange('startDate', e.target.value)}/>
            <input value={formData.endDate}
                   onChange={
                       (e)=>handleChange('endDate', e.target.value)}

            />
            <input
                value={formData.category}
                onChange={
                (e) =>handleChange('category', e.target.value)}
            />
            <button onClick={handleSave}>zapisz</button>
            <button onClick={onCancel}>anuluj</button>
            <button onClick={onClose} onSubmit={handleValidate}>[zamknij]</button>
        </div>
    )
}