import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { corsUrl, port } from './config'
import connectRedis from './cache/index'
import router from './routers'

const app = express()

dotenv.config()
connectRedis()

app.use(express.json({ limit: '10mb' }))
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 })
)
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }))

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
