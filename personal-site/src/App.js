import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Introduction from './Introduction';
import Social from './Social';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
          <Social />
          <Introduction />
        </header>
      </div>
    );
  }
}

export default App;
