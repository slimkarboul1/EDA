import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import './cache'

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
