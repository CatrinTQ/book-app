import { IQuestion } from "./IQuestion";

export interface IBookGoal {
    name: string;
    age: number;
    bookTitle: string;
    question: IQuestion[];
    answer: string;
    organisation: string;
    sport: string;
    created_at: Date;
}