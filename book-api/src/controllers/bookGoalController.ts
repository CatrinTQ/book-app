import { Request, Response } from "express";
import BookGoal from "../models/BookGoal";

export const getAllBookGoals = async (_: Request, res: Response) => {
  
  try {
    res.json(await BookGoal.find());
  } catch(error: unknown) {
    const message = error  instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({error: message})
  }
}

export const postBookGoal = async (req: Request, res: Response) => {
    const {name, age, book_title, question, answer, organisation, sport } = req.body

    if (!name || !age || !book_title || !question || !answer || !organisation || !sport) {
        res.status(400).json({ error: 'All fields are required' });
        return;
    }
    
    try {
        const bookGoal = new BookGoal({
            name: name,
            age: age,
            book_title: book_title,
            question: question,
            answer: answer,
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
