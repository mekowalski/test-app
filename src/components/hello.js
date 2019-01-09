import React, {Component} from 'react'
import Test from './test'
//Hello is a Parent of Test and a Child of App

class Hello extends Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        //grandchild
        //recieving and passing down this prop
        <Test statement= {this.props.statement}/>
      </div>
    )
  }
}

export default Hello
