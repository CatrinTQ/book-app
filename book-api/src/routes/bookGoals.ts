import express from 'express';
import { getAllBookGoals, postBookGoal } from '../controllers/bookGoalController';

const router = express.Router()

router.get('/', getAllBookGoals)
router.post('/', postBookGoal)

export default router;