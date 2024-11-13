export default interface ITodo {
    id: number;
    name: string;
    startDate?: Date | null;
    endDate?: Date | null;
    category: string
    description: string;
}