import React from 'react'
import {Games}  from './gameinfo'
import GameCard from './GameCard'


export default function GameList() {
  return (
    
      <div id="games" style={{width: 1000}}>
       
          {Games.map((game, index) => {
            console.log(index)
            return <GameCard key={index} index={index} {...game} />
          })}
        
      </div>
    
  )
}