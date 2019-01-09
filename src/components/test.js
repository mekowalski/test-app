import React, {Component} from 'react'
//importing the module, build it and export the Component
//presentational/only renders props
//Test is a Child to Hello

class Test extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <p>This is a paragraph.</p>
        //word is prop being passed down from Hello Component
        <p>{this.props.word}</p>
      </div>
    )
  }
}

export default Test
