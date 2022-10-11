import React from "react";
class Parent extends React.Component{
    constructor(){
        super()
        this.name='sachin'
    }
 render(){
    loc='mumbai'
    return<div>i m parent
        <h1>
            <Child n={this.name} l={this.loc}/>
        </h1>
    </div>
 }
}
export default Parent;
class Child extends React.Component{
    render(){
        return<div>i m child: {this.props.n}...{this.props.l}</div>
    }
}