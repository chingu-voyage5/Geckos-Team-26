import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Register from "./components/register";
import Login from "./components/login";
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
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;
