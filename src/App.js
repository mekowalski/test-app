import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello'
import Test from './components/test'

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
