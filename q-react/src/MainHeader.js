import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/fontawesome-free-solid';
import './App.css';

class MainHeader extends Component {

  render () {
    return (
      <div className='nav'>
          <div className='nav-inner'>
            <Link to='/' className='logo'>Q.<span>me</span></Link>
            <div className='text-right'>
              <Link to='/quizes'>Quizes</Link>
              <Link to='/create'>Create Quiz</Link>
              <Link to='/about'>About</Link>
              <a href='#' onClick='FUNCTION TO OPEN DROPDOWN WITH SIGN IN OPTIONS'><FontAwesomeIcon className='user-icon' icon={faUser} /></a>
            </div>
          </div>
        </div> 
      )
    }
  }
  
export default MainHeader
