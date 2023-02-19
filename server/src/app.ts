import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import connectRedis from './cache/index'

const app = express()
dotenv.config()

connectRedis()
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
