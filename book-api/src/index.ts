import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';


const app = express()

const corsOptions = {
  origin: 'https://book-client-xi.vercel.app/login',
//  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,  // Allow cookies to be sent
}

app.use(express.json())
app.use(cors(corsOptions))

app.use(cookieParser());

import goalRouter from './routes/bookGoals'  //router for users
import authRouter from './routes/auth'

app.use('/goals', goalRouter)
app.use('/auth', authRouter)

console.log("MONGODB_URL = ", process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || "")
  .then(() => console.log("Connected to MongoDB", mongoose.connection.name))
  .catch((err) => console.error("Failed to connect to MongoDB:", err))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})