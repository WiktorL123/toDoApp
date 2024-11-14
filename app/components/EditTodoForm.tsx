/*
*TODO:
* 1. Refactor useState for fields of todos - DONE
* 2. Finish error logic - IN PROGRESS
*   2.1. Change date validation
* 3. Change styles and make them in modules
* 4. Create layout with header and footer for pages
*   4.1. Header must contain links with React Router for form and todos list
* 5. Save todos in local storage
* 6. Remove errors in page.tsx if possible - DONE
* 7. Change editForm to modal
*
*
*
*  */

import IEditTodoFormProps from "@/app/interfaces/IEditTodoFormProps";
import {useState} from "react";
import ITodo from "@/app/interfaces/IToDo";
import '../globals.css'

const isValidDate = (date:string) :boolean =>{
    return !isNaN(new Date(date).getTime());
}

const validateStringInput = (inputValue:string)  =>{
    if(!inputValue.trim())
        return ` pole nie moze byc puste`
    else if (inputValue.trim().length > 100)
        return `pole jest za dlugie`
}
const validateStartDate = (startDate: string, endDate: string) => {
    if (!startDate) {
        return 'pole jest wymagane';
    }
    console.log('38', isValidDate(startDate))

    if (!isValidDate(startDate)) {
        return 'data rozpoczęcia jest niepoprawna';
    }

    if (endDate && !isValidDate(endDate)) {
        return 'data zakończenia jest niepoprawna';
    }

    if (endDate && new Date(startDate) > new Date(endDate)) {
        return 'data rozpoczęcia zadania nie może być większa od daty zakończenia';
    }

    return '';
};

const validateEndDate = (startDate: string, endDate: string) => {
    if (!endDate) {
        return 'pole jest wymagane';
    }

    if (!isValidDate(endDate)) {
        return 'data zakończenia jest niepoprawna';
    }

    if (new Date(startDate) > new Date(endDate)) {
        return 'data zakończenia zadania nie może być wcześniejsza od daty rozpoczęcia';
    }

    return '';
};




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

        const nameError = validateStringInput(formData.name)
        if (nameError)
            newErrors.name=nameError;
        const descriptionError = validateStringInput(formData.description)
        if (descriptionError)
            newErrors.description=descriptionError;
        const startDateError = validateStartDate(formData.startDate, formData.endDate)
        if (startDateError)
            newErrors.startDate=startDateError;
        const endDateError = validateEndDate(formData.startDate, formData.endDate)
        if (endDateError)
            newErrors.endDate=endDateError;
        const categoryError = validateStringInput(formData.category)
        if (categoryError)
            newErrors.category=categoryError;


        setErrors(newErrors)
        let result =Object.keys(newErrors).length === 0
        console.log(result)
        console.log(Object.keys(newErrors))
        console.log(newErrors)
        return result


    }


    return (
        <div className={'edit-todo-form'}>
            <label htmlFor={'name'}>nazwa zadania</label>
            <input
                id={'name'}
                value={formData.name}
                onChange={(e)=>handleChange("name", e.target.value)}
            />
            {errors.name && <p className={'error-p'}>{errors.name}</p>}
            <label htmlFor={'description'}>opis zadania</label>
            <textarea
                id={'description'}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
            />
            {errors.description && <p className={'error-p'}>{errors.description}</p>}
            <label htmlFor={'startDate'}>data rozpoczęcia</label>
            <input
                id={'startDate'}
                value={formData.startDate}
                onChange={
                (e)=>handleChange('startDate', e.target.value)}
            />
            {errors.startDate && <p className={'error-p'}>{errors.startDate}</p>}
            <label htmlFor={'endDate'}>data zakonczenia</label>
            <input
                id={'endDate'}
                value={formData.endDate}
                onChange={
                       (e)=>handleChange('endDate', e.target.value)}

            />
            {errors.endDate && <p className={'error-p'}>{errors.endDate}</p>}
            <label htmlFor={'category'}>kategoria</label>
            <input
                id={'category'}
                value={formData.category}
                onChange={
                (e) =>handleChange('category', e.target.value)}
            />
            {errors.category && <p className={'error-p'}>{errors.category}</p>}
            <button onClick={handleSave}>zapisz</button>
            <button onClick={onCancel}>anuluj</button>
            <button onClick={onClose} onSubmit={handleValidate}>[zamknij]</button>
        </div>
    )
}