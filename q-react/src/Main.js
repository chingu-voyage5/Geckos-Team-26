import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/fontawesome-free-solid';
import './App.css';
import trianglify from './img/trianglify.svg';
import note from './img/note.svg';

const Main = () => {
  return (
    <Fragment>
    <div className='hero'>
      <div className='nav'>
        <div className='nav-inner'>
          <Link to='/' className='logo'>Q.<span>me</span></Link>
          <div className='text-right'>
            <Link to='/quizes'>Quizes</Link>
            <Link to='/create'>Create Quiz</Link>
            <Link to='/about'>About</Link>
            <a href='#' onClick='FUNCTION TO OPEN DROPDOWN TO SIGN IN OR SIGN UP'><FontAwesomeIcon className='user-icon' icon={faUser} /></a>
          </div>
        </div>
      </div> {/***** END NAVBAR *****/}
      <div className='hero-left'>
        <h1>Q.<span>me</span></h1>
        <p>Welcome to the universal Quiz platform</p>
        <a className='sign-up-btn'>Sign Up</a>
      </div>
      <div className='hero-right'>
        <div className='note-image'></div>
      </div>
    </div> {/***** END HERO *****/}
    <section className='intro'>
      <div className='intro-content'>
        <div className='intro-left'>
          <div className='triangles-art'></div>
          <h2>Get quized or create your own quizes</h2>
          <p>Test your knowledge on a variety of topics by taking some of the quizes available on Q.me. Sign-up for an account to create your own quizes to share with other people.</p>
        </div>
        <div className='intro-right'>
          <button>Create Quiz</button>
          <button>Explore Quizes</button>
        </div>
      </div>
    </section> {/***** END INTRO *****/}
    </Fragment>
  )
}

export default Main