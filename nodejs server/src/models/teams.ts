import db from '../db'

export default class Team {
    constructor(private team_name: string){
    }

    static async find(id?: string): Promise<any>{
        const query = `
        select * from dev_teams ${id ? `where team_id = ${id}` : ''}
        `
        return db.execute(query)
    }

    static async findMeeting(id?: string): Promise<any>{
        const query = `
        select * from meetings ${id ? `where team_id = ${id}` : ''}
        `
        console.log('worked')
        return db.execute(query)
    }


    async update(id: string): Promise<any> {
        const setStatement = `
            ${this.team_name ? `team_name = '${this.team_name}',` : ''}
        `
        .trim().replace(/,$/, '')

        const query = `update dev_teams set
        ${setStatement}
        where id = ${id}`

        return await db.execute(query)
    }
}


export class meetingSaver {

    constructor(private team_id: string, private start_time: string, private end_time: string, private meeting_description: string, private room: string){
    }
async save(): Promise<any>{

    const query = `
    insert into meetings(team_id, start_time, end_time, meeting_description, room)
    value ('${this.team_id}', '${this.start_time}', '${this.end_time}', '${this.meeting_description}', '${this.room}')
`
const res = await db.execute(query)
console.log('res from databse')
console.log(res)
return res
}
}


// const customer = new Customer('Amjad', 'Arraf', 'amj.arr@gmail.com', 13)

