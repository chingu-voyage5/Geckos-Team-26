import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './Main';
import logo from './logo.svg';
import './App.css';
import About from './About';


class App extends Component {
  render() {
    return (
      <div className="App">  
      <Route exact path='/' render={() => (
        <Main />
      )}
      />
      <Route path='/about' render={() => (
        <About />
      )}
      />
      </div>
    );
  }
}

export default App;
