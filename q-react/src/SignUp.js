import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import CloseHeader from './CloseHeader';
import trianglify from './img/trianglify.svg';


class SignUp extends Component {
  
  render () {
    return (
      <Fragment>
      <CloseHeader />
      <div className='sign-hero'>
        <form onSubmit={this.handleSubmit} className='sign-up-component'>
          <div className='sign-details'>
            <input type='text' name='username' placeholder='Username' />
            <input type='text' name='email' placeholder='Email' />
            <input type='text' name='password' placeholder='Password' />
            <button className='sign-up-submit' onClick={this.props.onSignUp} >Sign Up</button>
          </div>
        </form>
      </div>
      
      </Fragment>
    )
  }
}

export default SignUp