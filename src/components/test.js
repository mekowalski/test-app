import React, {Component} from 'react'
//importing the module, build it and export the Component
//presentational/only renders props
//Test is a Child to Hello

class Test extends Component {
  render() {
    return(
      <div>
        <p>This is a paragraph.</p>
        {//statement is prop being passed down from App Grandparent Component
        //not directly though
        }
        <p>{this.props.statement} {this.props.mood}</p>
      </div>
    )
  }
}

export default Test
