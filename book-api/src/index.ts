import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

import goalRouter from './routes/bookGoals'  //router for users
import questionRouter from './routes/question'  //router for books

app.use('/goals', goalRouter)
app.use('/api/random', questionRouter)

console.log("MONGODB_URL = ", process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})