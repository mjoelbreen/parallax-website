import React, {Component} from 'react';
import '../css/index.css';
import Navbar from './Navbar';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container-white">
                <h1>VR IN MOTION</h1>
                <p>We make games here at Parallax Visions.</p>
                </div>
            </div>
        )
    }
}

export default Home;

