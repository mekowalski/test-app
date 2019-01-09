import React, {Component} from 'react'
import Test from './test'
//Hello is a Parent of Test and a Child of App

class Hello extends Component {
  constructor() {
    super()
    this.state = {} //store the input, is object to hold state
  }

  handleChange = (e) => {
    //debugger //this is an event handler
    this.setState = {
      [e.target.id]: e.target.value
    } //update state
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        //grandchild
        //recieving and passing down this prop
        <Test statement= {this.props.statement} mood= 'stressed out'/>

        //hold data in local state of Hello(this) component
        <input onChange= {this.handleChange} id='input' type="text" />
        <button>Submit</button>
      </div>
    )
  }
}

export default Hello
