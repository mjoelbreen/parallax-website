import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

import Projects from './Projects'
import GamePage from './GamePage'

import Contact from './Contact'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <img id="billboard" src="../images/parallax_new_billboard.png"></img>
                <span className="container">
                <p>Parallax Visions is an independent game development studio based in New Orleans, Louisiana. We specialize in creating games that are surreal and psychedelic. Parallax Visions is also the host of the New Orleans Global Game Jam.</p>
                </span>

              

                

                <footer>
                &copy; {new Date().getFullYear()} Parallax Visions, LLC
                </footer>
            </div>
        )
    }
}

export default Home;

