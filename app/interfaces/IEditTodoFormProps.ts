import ITodo from "@/app/interfaces/IToDo";

export default interface IEditTodoFormProps {
    todo: ITodo
    onSave: (todo: ITodo) => void
    onCancel: () => void,

}