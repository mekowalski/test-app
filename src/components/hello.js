import React, {Component} from 'react'
import Test from './test'
//Hello is a Parent of Test and a Child of App

class Hello extends Component {
  constructor() {
    super() {
      this.state = {}
    }
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        //grandchild
        //recieving and passing down this prop
        <Test statement= {this.props.statement} mood= 'stressed out'/>

        //hold data in local state of Hello(this) component
        <input id='input' type="text" />
        <button>Submit</button>
      </div>
    )
  }
}

export default Hello
