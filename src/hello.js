import React, {Component} from 'react'
import Test from './test'

class Hello extends Component {
  render() {
    return(
      <div>
        <h1>Hello World</h1>
        //grandchild
        <Test />
      </div>
    )
  }
}

export default Hello
