import express from "express";
import { getSingleQuestion } from "../controllers/questionController";

const router = express.Router();

router.get("/", getSingleQuestion); // GET /api/questions/random

export default router;
