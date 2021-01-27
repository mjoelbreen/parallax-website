import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../css/Navbar.css'
import Home from './Home'
import Projects from './Projects'
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

        const ToContact = () => {
            return(
                ReactDOM.render(
                    <Contact />,
                    document.getElementById('root')
                )
            )
        }
        

        
        return(
            <div className="buttons">
                <button id="home-button" onClick={ToHome}>Home</button>
                <button id="projects-button" onClick={ToProjects}>Projects</button>
                <button id="contact-button" onClick={ToContact}>Contact Me</button>
            </div>
        )
    }
}

export default Navbar;