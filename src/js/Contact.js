import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div>
                <h1>Contact Us</h1>
                <p>Here's how to contact us.</p>
                </div>
                <footer>
                &copy; {new Date().getFullYear()} Parallax Visions
                </footer>
            </div>
        )
    }
}

export default Contact;