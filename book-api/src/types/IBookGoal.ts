import { IQuestion } from "./IQuestion";

export interface IBookGoal {
    name: string;
    age: number;
    bookTitle: string;
    question: string;
    answer: string;
    rating: number;
    organisation: string;
    sport: string;
    created_at: Date;
}