import React from "react";
class Parent extends React.Component{
    getData=(data)=>{
        console.log(data,'getting data from child')
    }
    render(){
        return <div>
            i m parent
            <h1><Child fn={this.getData}/></h1>
        </div>

    }
}
class Child extends React.Component{
    constructor(){
        super();
        this.myData='mumbai'
    }
    handleClick=()=>{
     this.props.fn(this.myData)
    }
    render(){
        return <div>
            i m child
            <button onClick={this.handleClick}>pass data from child to parent</button>
        </div>
    }
}
export default Parent;