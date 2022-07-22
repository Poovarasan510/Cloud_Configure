
import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
    super (props);
    this.state={
    count:1
}
    }

    handleClick=()=>{
        console.log('handle click called');
        this.setState({count:this.state.count+1})
    }

  render() {
    return (
        <div>
        <p>I Like Sriharish Call Taxi</p>
        <p><button onClick={this.handleClick}className= 'btn btn-info'>+</button></p>
        <p>Likes:{this.state.count}</p>
      </div>
    )
  }
}
