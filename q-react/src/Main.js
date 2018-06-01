import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/fontawesome-free-solid';
import './App.css';
import MainHeader from './MainHeader';
import Footer from './Footer'
import trianglify from './img/trianglify.svg';
import note from './img/note.svg';

const Main = () => {
  return (
    <Fragment>
    <div className='hero'>
      <MainHeader /> {/***** NAVBAR *****/}
      <div className='hero-left'>
        <h1>Q.<span>me</span></h1>
        <p>Welcome to the universal Quiz platform</p>
        <Link to='/sign-up' className='sign-up-btn'>
          <div className='sign-up-button'>Sign Up</div>
        </Link>
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
        <Link to='/create' className='create-btn'>
          <div className='create-button'>Create Quiz</div>
        </Link>
        <Link to='/quizes' className='explore-btn'>
          <div className='explore-button'>Explore Quizes</div>
        </Link>
        </div>
      </div>
    </section> {/***** END INTRO *****/}
    <Footer />
    </Fragment>
  )
}

export default Main