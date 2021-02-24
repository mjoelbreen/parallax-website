import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/index.css'

class Games extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container-white">
                <h1>Games</h1>
                <p>Here are some of the games we've made.</p>
                </div>
            </div>
        )
    }
}

export default Games;