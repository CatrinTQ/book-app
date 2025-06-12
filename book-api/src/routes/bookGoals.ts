import express from 'express';
import { getAllBookGoals, postBookGoal } from '../controllers/bookGoalController';
import { verifyAccessToken } from '../middlewear/verifyToken';

const router = express.Router()

router.post('/', postBookGoal)

// Auth controll
router.get('/', verifyAccessToken, getAllBookGoals)

export default router;