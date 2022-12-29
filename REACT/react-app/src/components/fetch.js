import React from 'react'
const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:3000/teams/");
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

// const getusers = () => {
//     return async (dispatch) => {
//       try {
//         dispatch({ type: "users get request" })
//         const res = await axios.get('http://localhost:3000/teams/')
//         const emails = res.data.map((user) => user.email)
//         dispatch({ type: "users get res succeeded", payload: emails })
//       } catch (error) {
//         dispatch({ type: "users get res failed", payload: error.response.status })
//       }
//     }
//   }

  function Users() {
    const data = fetchData()
    console.log(data)
    return (
        <div>dsfsdfsdf</div>
    )
  }
  
  export default Users