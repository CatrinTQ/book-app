import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    _id: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
  });
  
  
  export default mongoose.model('Questions', QuestionSchema);