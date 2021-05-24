import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/Navbar.css'
import Home from './Home'
import Projects from './Projects'
import GamePage from './GamePage'

import Contact from './Contact'

class Navbar extends React.Component {
    render() {
        const ToHome = () => {
            return(
                ReactDOM.render(
                    <Home />,
                    document.getElementById('root')
                )
            )
        }

        const ToProjects = () => {
            return(
                ReactDOM.render(
                    <Projects />,
                    document.getElementById('root')
            )
            )
        }

        const ToGames = () => {
            return(
                    ReactDOM.render(
                        <GamePage />,
                        document.getElementById('root')
                    )
                    
                
            )
        }

       

        const ToContact = () => {
            return(
                ReactDOM.render(
                    <Contact />,
                    document.getElementById('root')
                )
            )
        }
        

        
        return(
            <div className="nav">
                <img id="logo" src="../images/parallax-logo.png" onClick={ToHome}/>
                <a onClick={ToProjects}>VR PROJECTS</a>
                <a onClick={ToGames}>GAMES</a>
                
                <a onClick={ToContact}>CONTACT US</a>
            </div>
        )
    }
}

export default Navbar;