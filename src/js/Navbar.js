import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/Navbar.css'
import Home from './Home'
import Projects from './Projects'
import Games from './Games'
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
                    <Games />,
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
                <img id="logo" src="bw-web-logo.png" onClick={ToHome}/>
                <a id="home-button" onClick={ToProjects}>VR PROJECTS</a>
                <a id="projects-button" onClick={ToGames}>GAMES</a>
                <a id="contact-button" onClick={ToContact}>CONTACT US</a>
            </div>
        )
    }
}

export default Navbar;