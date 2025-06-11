import { Request, Response } from "express";
import Question from "../models/Question";


export const getAllQuestions = async (_: Request, res: Response) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}

export const getSingleQuestion = async (req: Request, res: Response) => {
  try {
  const question = await Question.findById(req.params.id);

  if (!question) {
      res.status(404).json({message: 'Question not found'})
      return;
    }
    res.json(question);
  } catch(error: unknown) {
    const message = error  instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({error: message})
  }
}