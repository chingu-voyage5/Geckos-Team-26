import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import SignUp from './SignUp';
import About from './About';
import CreateQuiz from './CreateQuiz';


class App extends Component {
  render() {
    return (
      <div className="App">  
      <Route exact path='/' render={() => (
        <Main />
        )}
      />
      <Route path='/sign-up' render={({ history }) => (
        <SignUp 
          onSignUp={member => {
            // this.createMember(member)
            history.push('/')
          }}
          />
      )}
      />
      <Route path='/about' render={() => (
        <About />
      )}
      />
      <Route path='/create' render={() => (
        <CreateQuiz />
      )}
      />
      </div>
    );
  }
}

export default App;
