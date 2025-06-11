import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

import goalRouter from './routes/bookGoals'  //router for users
import questionRouter from './routes/question'  //router for books

app.use('/goals', goalRouter)
app.use('/questions', questionRouter)

console.log("MONGODB_URL = ", process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || "")
  .then(() => console.log("Connected to MongoDB", mongoose.connection.name))
  .catch((err) => console.error("Failed to connect to MongoDB:", err))

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})