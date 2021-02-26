import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/index.css'

class Music extends React.Component {
    render() {
        return(
            <div>
            <Navbar />
            <div className="container">
            <h1>MUSIC</h1>
            <p>Here is our music.</p>
            <div id="music-container">
            <iframe style={{border: 0, width: 700, height: 307}} src="https://bandcamp.com/EmbeddedPlayer/album=3737920697/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://parallaxvisions.bandcamp.com/album/post-internet">[Post Internet] by Michael Bordle</a></iframe>
            </div>
            </div>
        </div>
        )
    }
}

export default Music