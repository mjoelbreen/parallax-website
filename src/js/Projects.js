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
            </div>
        )
    }
}

export default Projects;