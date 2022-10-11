import React from "react";



class ExceptionBoundry extends React.Component{
    state={
        hasExceptoion:false
    }
    static getDerivedStateFromError(error){
        return {
            hasExceptoion:true
        }
    }
    render(){
       return <div>
        {this.state.hasExceptoion? <h1>something went wrong</h1>:this.props.children}
       </div>
    }
    
}
export default ExceptionBoundry