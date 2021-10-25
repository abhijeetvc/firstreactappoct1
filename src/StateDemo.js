// Hooks -> Functions
import React,{useState} from 'react'

function StateDemo(){

    const[number,setNumber]=useState(10)
    const[message,setMessage]=useState('')

    const incrementValue=()=>{
        setNumber(number+1)
    }

    const onChange=(event)=>{
        console.log(event.target);
        setMessage(event.target.value)
    }

    return(
        <div>
            <h1>State Demo</h1>
            <p>Number is: {number}</p>
            <input type="text" name="message" value={message} onChange={onChange}/>
            <button type="button" onClick={incrementValue}>Increment Value</button>
            <p>{message}</p>
        </div>
    )
}

export default StateDemo