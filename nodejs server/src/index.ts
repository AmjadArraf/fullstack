import express, { Application, Request, Response } from 'express'
// import teams from './routers/teams'
import {sendRouter, router} from './routers/teams'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

app.use(express.json())
app.use('/teams', router)
app.use('/meetings', sendRouter)

app.get('/', (req:Request, res:Response)=> {
    try {
        res.send('from index')
    }catch(error) {
        res.status(500)
    }
})

const port = +(process.env.APP_PORT || 3000)
app.listen(port, ()=> console.log('server is listening on port 3000'))