import mongoose from "mongoose";
import { IBookGoal } from "../types/IBookGoal";
const Schema = mongoose.Schema;

const GoalSchema = new Schema<IBookGoal>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Goals", GoalSchema, "goals");
