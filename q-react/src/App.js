import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import SignUp from './SignUp';
import About from './About';


class App extends Component {
  render() {
    return (
      <div className="App">  
      <Route exact path='/' render={() => (
        <Main />
        )}
      />
      <Route path='/sign-up' render={() => (
        <SignUp />
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
