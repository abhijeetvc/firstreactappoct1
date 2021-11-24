import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }
    
    //get executed only once. After the component gets rendered
    componentDidMount(){
        console.log('Component Did Mount Executed!!! '+this.state.number);
    }

    componentDidUpdate(){
        console.log('Component Did Update!!! '+this.state.number);
    }

    incrementValue=()=>{
        this.setState({number:this.state.number+1})
    }

    decrementValue=()=>{
        console.log('In decrement function!!!');
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number===0 ? 1:0})
    }

    render(){

        let component=this.state.number ? <Component1/> : <Component2/>

        return(
            <div>
                <h1>Life Cycle Methods</h1>
                <p>Number is : {this.state.number}</p>
                <button type="button" onClick={this.incrementValue}>Increment Value</button>
                <button type="button" onClick={this.toggleComponent}>Toggle</button>
                {component}
            </div>
        )
    }
}

export default LifeCycleMethods