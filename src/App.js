import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'
import Toolbar from './Toolbar'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Toolbar />
        Here are your messages: 
        <Messages/>
      </div>
    );
  }
}

export default App;
