import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {
      type: String,
      required: true
    },
  });
  
  
  export default mongoose.model('Question', QuestionSchema, 'questions');