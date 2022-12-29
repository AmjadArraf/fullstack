import { Router, Request, Response} from 'express'
import { save, find, findMeeting, update } from '../controlers/teams'

const router : Router = Router()
const sendRouter: Router = Router()

// fisrtName
//lastName
//email
//point
sendRouter.post('/', async (req:Request, res:Response) => {
    try {
        const insertId = await save(req.body)
        insertId ? res.send(`meeting ${insertId} inserted`) : res.send('nothing inserted')
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

router.get('/:id', async (req:Request, res:Response) => {
    try {
        const meeting = await findMeeting(req.params.id)
        meeting.length ? res.send(meeting) : res.sendStatus(404)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
    // try {
    //     const team = await find(req.params.id)
    //     team.length ? res.send(team) : res.sendStatus(404)
    // } catch (error) {
    //     console.log(error)
    //     res.status(500)
    // }
})

router.get('/', async (req:Request, res:Response) => {
    try {
        const team = await find()
        console.log(team)
        team.length ? res.send(team) : res.sendStatus(404)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

router.patch('/:id', async (req:Request, res:Response) => {
    try {
        const isUpdated = await update(req.params.id, req.body)
        isUpdated ? res.send(`Team ${req.params.id} updated`) : res.send('nothing updated')
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

export {router, sendRouter}