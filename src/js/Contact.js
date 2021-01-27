import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <h1>Contact Us</h1>
            </div>
        )
    }
}

export default Contact;