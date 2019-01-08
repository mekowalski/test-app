import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello'
import Test from './test'

//Parent/Main
class App extends Component {
  render() {
    return (
      <div className="App">
        //Child
        <Hello />
      </div>
    );
  }
}

export default App;
