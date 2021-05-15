import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/index.css';

import GameCard from './GameCard.js'
import {Games} from './gameInfo.js'




class GamePage extends React.Component {
    
    render() {
        
        return(
            <div>
                <Navbar />
               
                <div style={{flex: '1', display: 'flex', justifyContent: 'center'}}>
        <div >
          <div style={{display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {Games.map((game, index) => {
              console.log(index)
              return <GameCard key={index} index={index} {...game} />
            })}
          </div>
        </div>
      </div>
              
                
               
            </div>
        )
    }
}

export default GamePage;