import React from 'react'

function EventsDemo(){

    const[message,setMessage]=React.useState('')
    const[message1,setMessage1]=React.useState('')

    const onChange=(event)=>{
        setMessage(event.target.value)
    }

    const displayValue=()=>{
        setMessage1(message)
    }

    return(
        <div>
            <input type="text" onChange={onChange}/>
            <p>Message : {message1}</p>
            <button type="button" onClick={displayValue}>Show Data</button>
        </div>
    )
}

export default EventsDemo 