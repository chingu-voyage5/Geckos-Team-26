import React, { Component } from 'react';
import Header from './Header';

export default class CreateQuiz extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <form onCreate={this.handleCreate //FUNCTION TO ADD QUIZ TO DATEBASE
        }>
        <input type='text' name='quiz-title' placeholder='Quiz Title' />
        </form>
      </div>
    )
  }
}
