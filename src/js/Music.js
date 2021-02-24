import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/index.css'

class Music extends React.Component {
    render() {
        return(
            <div>
            <Navbar />
            <div className="container-white">
            <h1>MUSIC</h1>
            <p>Here is our music.</p>
            </div>
        </div>
        )
    }
}

export default Music