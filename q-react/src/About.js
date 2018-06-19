import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import trianglify from './img/trianglify.svg';
import icon from './img/user-icon.svg';



export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <div className='header'>
                    <h2>About</h2>
                </div>
                <div class='about-triangles'>
                    <div className='triangles-art'></div>
                </div>
                <h3>What is Quizzical?</h3>
                <p>Vel id posse accusata. Pri numquam epicurei ad, eu vis libris essent</p>
                <p>pertinacia, erat feugiat liberavisse eu vix. Ei eros reque dissentiet mei.</p>
                <p>Eos feugiat noluisse ut. Et cum nominati recteque maluisset,</p>
                <p>nihil dignissim percipitur ei usu. Saepe vocibus accumsan nec ea,</p>
                <p>eros laudem vidisse ea eum?</p>
                <div className='user-icon'></div>
            </div>
        );
    }
}


