import dotenv from 'dotenv'

dotenv.config()
export const environment = process.env.NODE_ENV
export const redis = {
  host: process.env.REDIS_HOST || '',
  port: parseInt(process.env.REDIS_PORT || '0'),
  password: process.env.REDIS_PASSWORD || '',
}

export const caching = {
  contentCacheDuration: parseInt(
    process.env.CONTENT_CACHE_DURATION_MILLIS || '600000'
  ),
}

export const logDirectory = process.env.LOG_DIR
