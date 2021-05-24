import React, { Component } from 'react'

import Navbar from './Navbar'


import GameCard from './GameCard.js'
import {Games} from './gameInfo.js'




class GamePage extends React.Component {
    
    render() {
        
        return(
            <div>
                <Navbar />
                <h1>Games</h1>
               
               
                <div style={{flex: '1', display: 'flex',  justifyContent: 'space-around'}} >
    
          <div style={{display: 'flex', flex: '1', flexDirection: 'row', flexWrap: 'wrap'}}>
            {Games.map((game, index) => {
              console.log(index)
              return <GameCard key={index} index={index} {...game} />
            })}
          </div>
        </div>
        <footer>
                &copy; {new Date().getFullYear()} Parallax Visions
                </footer>
      </div>
              
                
               
       
        )
    }
}

export default GamePage;