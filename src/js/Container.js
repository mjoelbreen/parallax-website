import React, { Component } from 'react'


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

        
     
        return(
            <div>
                


            </div>
        )
    }
}

export default Container