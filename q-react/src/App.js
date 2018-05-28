import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './Main';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">  
      <Route exact path='/' render={() => (
        <Main />
      )}
      />
      </div>
    );
  }
}

export default App;
