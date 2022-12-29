import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
  const [users, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    async function fetchTeams() {
      try {
        setIsLoading(true)
        const res = await axios.get('http://localhost:3000/teams')
        setIsLoading(false)
        setErrors('')
        setTeams(res.data)
      } catch (error) {
        setIsLoading(false)
        setErrors(error.message)
        setTeams([])
      }
    }
    fetchTeams()
  }, [])
  return (
    <div>
      <div>{isLoading && 'Loading...'}</div>
      <div>{errors}</div>
      <ul>
        {users.map((team) => (
          <li>
            {team}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData
