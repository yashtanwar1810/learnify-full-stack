import {configDotenv} from 'dotenv'

configDotenv()

export const env = {
    PORT: process.env.PORT
}