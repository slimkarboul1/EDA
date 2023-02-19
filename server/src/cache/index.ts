import { redis } from '../config'
import { createClient } from 'redis'
// import Logger from '../core/Logger'

const redisURL = `redis://:${redis.password}@${redis.host}:${redis.port}`

const client = createClient({ url: redisURL })

;(async () => {
  await client.connect()
})()

// If the Node process ends, close the Cache connection
process.on('SIGINT', async () => {
  await client.disconnect()
})

export default client
