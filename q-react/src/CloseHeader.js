import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/fontawesome-free-solid';
import './App.css';

const CloseHeader = () => {

  return (
    <div className='nav'>
    <div className='nav-inner'>
      <Link to='/' className='logo'>Q.<span>me</span></Link>
      <div className='text-right'>
        <Link to='/'><FontAwesomeIcon className='close-icon' icon={faTimes} /></Link>
      </div>
    </div>
  </div> 
  )
}

export default CloseHeader