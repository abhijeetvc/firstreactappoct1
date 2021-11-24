
function UseRefDemo(){

    // const[message,setMessage]=React.useState('')

    // const onChange=(event)=>{
    //     setMessage(event.target.value)
    // }
    
    // const inputElement=React.useRef()

    // const focusInput=()=>{
    //     inputElement.current.value
    // }

    //const[number,setNumber]=React.useState(0)

    let number=0

    return(
        <div>
            <input type="text" ref={inputElement} />
            <p>Number is : {number}</p>
            <button onClick={focusInput}>Check</button>
        </div>
    )
}