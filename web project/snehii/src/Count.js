import React, { Component } from 'react'

export default class  extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        
        
    }
    intCount=()=>{
       this.setState({
        count:this.state.count+1
       })
    }
  render() {
    

    return (
      <div>
        <button onClick={this.intCount}>int count</button>
        <h1>COUNT...{this.state.count}</h1>
      </div>
    )
  }
}
