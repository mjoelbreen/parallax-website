import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: null,
            gameTitle: null,
            img: null
        }
    }

    setBoxColor(color) {
    const {backgroundColor} = this.state;
     return this.setState({backgroundColor: color})
    }

   


    render() {

        const roseBox = new Container();
        roseBox = {
            backgroundColor: roseBox,
            
        }
        const whiteBox = () => {
            return(
                ReactDOM.render(
                    <Container style={{backgroundColor: "white"}}/>
                )
            )
        }
        return(
            <div>
                {whiteBox}


            </div>
        )
    }
}

export default Container