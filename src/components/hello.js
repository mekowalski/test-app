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
    this.setState ({
      [e.target.id]: e.target.value
    }) //update state in real time
  }

  handleSubmit = (e) => {
    debugger
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        {//grandchild
        //recieving and passing down this prop
        }
        <Test statement={this.props.statement} mood='stressed out'/>

        {//hold data in local state of Hello(this) component
        }
        {//create a from to provide input field
          //submit is an input type, so weird
        }
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} id='input' type='text'/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Hello
