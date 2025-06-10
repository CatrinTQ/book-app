import mongoose from "mongoose";
import { IBookGoal } from "../types/IBookGoal";
const Schema = mongoose.Schema;

const BookSchema = new Schema<IBookGoal>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bookTitle: {
    type: String,
    required: true
  },
  question: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
  answer: {
    type: String,
    required: true
  },
  organisation: {
    type: String,
    required: true
  },  
  sport: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Book', BookSchema);