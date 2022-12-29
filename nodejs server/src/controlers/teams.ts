import { Team, Meeting} from '../interfaces/team'
import TeamModel, {meetingSaver} from '../models/teams'

export const save = async (data: Meeting): Promise<number | null> => {
    try {
        const {team_id, start_time, end_time, meeting_description, room} = data
        const team = new meetingSaver(team_id, start_time, end_time, meeting_description, room)
        const [ res ] = await team.save()
        return res.affectedRows ? res.insertId : null
    } catch (error) {
        console.log(error)
        return null
    }
}

export const find = async (id? : string) : Promise<any> => {
    const [team] = id ? await TeamModel.find(id) : await TeamModel.find()
    return team
}

export const findMeeting = async (id? : string) : Promise<any> => {
    const [team] = id ? await TeamModel.findMeeting(id) : await TeamModel.findMeeting()
    return team
}


export const update = async (id: string, data: Team): Promise<boolean> => {
    const {team_name} = data
    if(team_name == undefined) return false

    const team = new TeamModel(team_name)

    const [res] = await team.update(id)
    return res.affectedRows ? true : false

}