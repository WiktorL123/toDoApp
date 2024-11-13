import IEditTodoFormProps from "@/app/interfaces/IEditTodoFormProps";
import {useState} from "react";

export default function EditTodoForm({todo, onSave, onCancel}:IEditTodoFormProps) {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const handleSave = () => {
        const updatedTodo ={
            ...todo,
            name,

        }
    }


    return (
        <></>
    )
}