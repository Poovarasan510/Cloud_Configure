import React, { Component } from 'react'
import { Review } from './Review';

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
 <Review count={this.state.count} handleClick={this.handleClick}></Review>
      </div>
    )
  }
}
