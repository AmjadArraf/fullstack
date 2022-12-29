import React from 'react'
import axios from 'axios'

async function handleClick() {
  var jsonData = getdata()
    try {
        const res = await axios.post('http://localhost:3000/meetings', jsonData);
        console.log(res.data)
      } catch (error) {
        console.log('could not get')
      }
    }


function MyForm() {
    return (
        <div>
      <form>
        <h2> Add meeting</h2>
        <label>Team ID
          <input id='team' type="text" />
        </label>
        <label>Start time
          <input id= 'start'type="text" />
        </label>
        <label>end time
          <input id='end' type="text" />
        </label>
        <label>description
          <input id='description' type="text" />
        </label>
        <label>Room
          <input id='room' type="text" />
        </label>
      </form>
      <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Add the new meeting
    </div>
      </div>
    )
  }

  function getdata(){
    const team = document.getElementById('team')
    const start = document.getElementById('start')
    const end = document.getElementById('end')
    const description = document.getElementById('description')
    const room = document.getElementById('room')
    
    let jsonData = {
    "team_id": `${team.value}`,
    "start_time": `${start.value}`,
    "end_time": `${end.value}`,
    "meeting_description": `${description.value}`,
    "room": `${room.value}`
    }
    console.log(jsonData)
    return jsonData;
  }

  export default MyForm
