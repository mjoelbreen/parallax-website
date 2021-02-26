import React, { Component } from 'react'
import Navbar from './Navbar'
import Container from './Container'
import '../css/index.css'
import { buildQueries, getSuggestedQuery } from '@testing-library/react';




class Games extends React.Component {
    render() {
        return(
            <div>
                <Navbar />
                <div className="container">
                <h1>Games</h1>
                <p>Here are some of the games we've made.</p>
                </div>
                <Container style={{backgroundColor: "greenyellow"}}>
                    <h2>Interference</h2>
                    <p>This is a game where you shit on your own balls.</p>
                </Container>
            </div>
        )
    }
}

export default Games;