import { Request, Response } from "express";
import BookGoal from "../models/Goal";

export const getAllBookGoals = async (_: Request, res: Response) => {
  try {
    const goals = await BookGoal.find();
    res.json(goals);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}

export const postBookGoal = async (req: Request, res: Response) => {
    const {name, age, bookTitle, rating, question, answer, organisation, sport } = req.body

    if (!name || !age || !bookTitle || !question || !answer || !rating || !organisation || !sport) {
        res.status(400).json({ error: 'All fields are required' });
        return;
    }
    
    try {
        const bookGoal = new BookGoal({
            name: name,
            age: age,
            bookTitle: bookTitle,
            question: question,
            answer: answer,
            rating: rating,
            organisation: organisation,
            sport: sport,
        })
        const savedBookGoal = await bookGoal.save();
        res.status(201).json({message: 'Book goal created', data: savedBookGoal})
    } catch (error: unknown) {
        const message = error  instanceof Error ? error.message : 'Unknown error'
        res.status(500).json({error: message})
    }
}
