import { Request, Response } from "express";
import Question from "../models/Question";

export const getSingleQuestion = async (_: Request, res: Response) => {
  
  try {
    res.json(await Question.findOne());
  } catch(error: unknown) {
    const message = error  instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({error: message})
  }
}