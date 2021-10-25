import React from 'react'

class StateClassDemo extends React.Component{

    constructor(){
        super()
        this.state={
            number:10,
            message:''
        }
    }
    
    incrementValue=()=>{
        this.setState({number:this.state.number+1})
    }

    onChange=(event)=>{
        this.setState({message:event.target.value})
    }

    render(){
        return(
            <div>
                <h1>State Demo</h1>
                <p>Number is: {this.state.number}</p>
                <input type="text" name="message" value={this.state.message} onChange={this.onChange}/>
                <button type="button" onClick={this.incrementValue}>Increment Value</button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default StateClassDemo