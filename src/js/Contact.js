import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                <h1>Contact Us</h1>
                <p>Here's how to contact us.</p>
                </div>
            </div>
        )
    }
}

export default Contact;