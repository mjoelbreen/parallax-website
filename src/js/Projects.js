import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

class Projects extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                <h1>Projects</h1>
                <p>Here is what we've been up to.</p>
                </div>
                <footer>
                &copy; {new Date().getFullYear()} Parallax Visions, LLC
                </footer>
            </div>
        )
    }
}

export default Projects;