import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/fontawesome-free-solid';
import './App.css';
import trianglify from './img/trianglify.svg';

const Main = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <div className='nav-inner'>
          <Link to='/' className='logo'>Q.<span>me</span></Link>
          <div className='text-right'>
            <Link to='/quizes'>Quizes</Link>
            <Link to='/create'>Create Quiz</Link>
            <Link to='/about'>About</Link>
            <a onClick='FUNCTION TO OPEN DROPDOWN TO SIGN IN OR SIGN UP'><FontAwesomeIcon className='user-icon' icon={faUser} /></a>
          </div>
        </div> {/* END NAVBAR */}  
      </div>
      {/* <div className='hero-image'>
      </div> */}
    </div> //END HEADER
  )
}

export default Main