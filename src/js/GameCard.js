import React, {Component} from "react"

import {
  GameCardDescription,
  GameCardContainer,
  GameCardHeader,
  GameCardBody,
  GameCardImage,
  ItchLink
} from './CardStyle.js'

class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
  }

  toggleHover() {
    const {hovering} = this.state
    this.setState({hovering: !hovering})
  }

  formatDescription() {
    const {description} = this.props

    console.log(description)

    return description//.slice(0, 125) + ((description.length > 160) ? "..." : '')
  } 



 

 

  render() {

    

    const {
      title,
      subtitle,
      img_path,
      itch_link,
      index,
    } = this.props

   
 

    /*const hoverColors = [
      '#F22738',
      '#BF56AE',
      '#6EBF49',
      '#F2E41D',
      '#F2EDD5'
    ]

    const hoverColor = hoverColors[Math.round(Math.random() * 4)]
    */
  
    return (
      
      <div
        style={GameCardContainer} 
        //onMouseEnter={() => this.toggleHover()}
        //onMouseLeave={() => this.toggleHover()}
      >
       
        <img src={`${img_path}`} alt={title} style={GameCardImage}  />
        
        <div style={{...GameCardBody,
            backgroundColor: '#E7E7E7'
            //backgroundColor: (this.state.hovering ? hoverColor: '#E7E7E7')
             }}>
          <h2 style={GameCardHeader} >
            {title}
          </h2>
         
  
          <p style={GameCardDescription}>{this.formatDescription()}</p>
          <footer>
            <a style={ItchLink} href={itch_link} target="_blank">
              Learn more
            </a>
            </footer>
        </div>
        
      </div>
    )
  }
}

export default GameCard
