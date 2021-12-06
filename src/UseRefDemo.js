import React,{ useRef } from "react";

function UseRefDemo(){

  //  const[number,setNumber]=React.useState(0)

  //  const[message,setMessage]=React.useState('')

    const message=React.useRef()

    // const onChange=(event)=>{
    //     setMessage(event.target.value)
    // }

    const displayData=()=>{
        console.log(message.current.value);
    }

    return(
        <div>
            <h2>Controlled Component</h2>
            <input type='text' ref={message}/>
            <button type='button' onClick={displayData}>Display</button>
        </div>
    )
}

export default UseRefDemo

// Redux - Wrapper over the react to manage state
// Terminology : action, reducer, dispatch, connect, store

// Redux : State management library
          // You can manage state at component level and pass state via props
          // Entire state of the application is managed in one immutable object - store

          // Action : 
                    // - It sends data from your application to Redux store.
                    // - It is an object with two properties.
                         // - type and payload
                            // - type --> Type is kind of Constant
                            // - payload --> optional. It is additional data will be passed if 
                                 //required.
                    // action creator
                        // - it is a function that returns an action.             

           // Reducers :
                     // - It is a function
                     // - It takes two parameters: a) state, b) action
                     
           // Store :
                     // - Redux appllication state resides in store.
                     // - Store is initialized with reducer
                     // - Provider wraps the react application
                     
            // Dispatch : 
                     // - it is method available on the store which accepts object 
                          //that is used to update the redux state  
                          
            // Connect : 
                     // - it is a function
                     // - used to connect react to redux              
                            





