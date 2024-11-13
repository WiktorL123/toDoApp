import IEditTodoFormProps from "@/app/interfaces/IEditTodoFormProps";
import {useState} from "react";

export default function EditTodoForm({todo, onSave, onCancel}:IEditTodoFormProps) {
    const [name, setName] = useState<string>(todo.name);
    const [description, setDescription] = useState<string>(todo.description);
    const [startDate, setStartDate] = useState<string>(
        todo.startDate ? todo.startDate.toISOString().substring(0, 10) : ''
    );
    const [endDate, setEndDate] = useState<string>(
        todo.endDate ? todo.endDate.toISOString().substring(0, 10) : ''
    );
    const [category, setCategory] = useState<string>(todo.category);

    const handleSave = () => {
        const updatedTodo = {
            ...todo,
            name,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            description,
            category
        };
        onSave(updatedTodo);
    };


    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSave}>zapisz</button>
            <button onClick={onCancel}>anuluj</button>
        </div>
    )
}