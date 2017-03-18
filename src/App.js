import React, { Component } from 'react';
import logo from './reactStuttgartLogo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ReactStuttgart</h2>
        </div>
        <p className="App-intro">
          6. Meetup - React Stuttgart @ ITM
        </p>
        <p className="App-intro">
          Freitag, 24. März 2017 - 18:30
        </p>
      </div>
    );
  }
}

export default App;
