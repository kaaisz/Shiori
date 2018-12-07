import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Title = () => {
  return (
    <div className={'titleContainer'}>
      <h1 className={'title'}>
        This is our react app!
    </h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Title/>
      </div>
    );
  }
}

export default App;
