import express from 'express'
import openai from './openai'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const server: express.Application = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).send('server is up!')
})

server.use('/', openai)

server.listen(process.env.PORT || 4000, () => {
    console.log('server is running!')
})

export default server