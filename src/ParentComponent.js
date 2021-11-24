import React from 'react'

function ParentComponent(){

    const[text,setText]=React.useState('')

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return(
        <div>
            <h2>Callback Event Handling</h2>
            <ChildComponent inputValue={text} onInputChange={handleChange}/>
            <p>Display Message : {text}</p>
        </div>
    )
}

function ChildComponent({inputValue,onInputChange}){
    return(
        <div>
            <input type="text" value={inputValue} onChange={onInputChange}/>
        </div>
    )
}

export default ParentComponent