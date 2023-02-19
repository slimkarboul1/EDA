import { redis } from '../config'
import { createClient } from 'redis'
import Logger from '../core/Logger'

const connectRedis = async () => {
  const redisURL = `redis://:${redis.password}@${redis.host}:${redis.port}`

  const client = createClient({ url: 'redis://redis:6379' })
  await client.connect()
  // await client.set('name', 'slim')
  // const value = await client.get('name')
  // console.log(value)

  client.on('connect', () => Logger.info('Cache is connecting'))
  client.on('ready', () => Logger.info('Cache is ready'))
  client.on('end', () => Logger.info('Cache disconnected'))
  client.on('reconnecting', () => Logger.info('Cache is reconnecting'))
  client.on('error', (e) => {
    Logger.error(e)
  })

  // If the Node process ends, close the Cache connection
  process.on('SIGINT', async () => {
    await client.disconnect()
  })
}

export default connectRedis
