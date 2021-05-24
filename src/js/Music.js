import React, { Component } from 'react'
import '../css/index.css'
import Navbar from './Navbar'



class Music extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
      }

      async componentDidMount() {
        const response = await fetch(`http://parallaxvisions.bandcamp.com/album/post-internet`);
        const json = await response.json();
        this.setState({ data: json });
      }

   
                //<iframe style={{border: 0, width: 700, height: 307}} src="https://bandcamp.com/EmbeddedPlayer/album=3737920697/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://parallaxvisions.bandcamp.com/album/post-internet">[Post Internet] by Michael Bordlee</a></iframe>
            
     
    render() {
       
       
        return(
            <div>
            <Navbar />
           
            <h1>MUSIC</h1>
           
            <div id="music-container">
            <iframe style={{border: 0, width: 700, height: 307}} src="https://bandcamp.com/EmbeddedPlayer/album=3737920697/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless>{this.state.data}</iframe>
           
            </div>
            <footer>
                &copy; {new Date().getFullYear()} Parallax Visions
                </footer>
            
        </div>
        )
        }
}

export default Music