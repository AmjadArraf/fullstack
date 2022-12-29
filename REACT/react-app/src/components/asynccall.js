import React from 'react'
import axios from 'axios'

const options = [
  { value: '1', label: '1- react team', key: "uniqueId1"},
  { value: '2', label: '2- mobile team', key: "uniqueId2" },
  { value: '3', label: '3- UI team', key: "uniqueId3" },
  { value: '4', label: '4- fullstack team', key: "uniqueId4" },
  { value: '5', label: '5- c team', key: "uniqueId5" },
  { value: '6', label: '6- engineering team', key: "uniqueId6" }
]

class MyComponent extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      value: "1",

    };

    this.handleChange = this.handleChange.bind(this);

  }


  async handleChange(e) {

    let reqId = e.target.value;

    this.setState({ value: e.target.value });

    try {
      const res = await axios.get(`http://localhost:3000/teams/${reqId}`)
      console.log(res.data)
    } catch (error) {
      console.log('could not get')
    }
  }


  render() {

    return (

      <div id="App">

        <div className="select-container">

          <select value={this.state.value} onChange={this.handleChange}>

            {options.map((option) => (

              <option value={option.value} key={option.key}>{option.label}</option>

            ))}

          </select>

        </div>

      </div>

    );

  }

}


export default MyComponent



  


 
