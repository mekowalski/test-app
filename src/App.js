import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
import Test from './components/test'

//Parent/Main to Hello & Grandparent to Test
class App extends Component {
  render() {
    return (
      <div className="App">
        //Child
        //statement prop is being passed down to Hello child
        <Hello statement='this is a statement'/>
      </div>
    );
  }
}

export default App;
