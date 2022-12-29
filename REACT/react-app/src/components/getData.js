import React from "react"
import axios from 'axios'

function GetDataCom() {
  
  async function handleClick() {
    try {
        const res = await axios.get('http://localhost:3000/teams')
        console.log(res.data)
      } catch (error) {
        console.log('could not get')
      }
    }

    return (
        <div>
      <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Get teams
    </div>
    <div id='teamsDiv'></div>
      </div>
    )
}

  // async function handleClick() {
  //   try {
  //       const res = await axios.get('http://localhost:3000/teams')
  //       console.log(res.data)
  //     } catch (error) {
  //       console.log('could not get')
  //     }
  //   }
    
export default GetDataCom


