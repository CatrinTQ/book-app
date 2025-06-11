import express from "express";
import { getAllQuestions, getSingleQuestion  } from "../controllers/questionController";

const router = express.Router();

router.get("/", getAllQuestions);
router.get('/:id', getSingleQuestion);

export default router;
