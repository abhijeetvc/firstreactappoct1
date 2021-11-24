import {createContext, useContext} from 'react'

const ContextValue=createContext('Default Value')

function UseContextDemo(){
    const value='Checking Context'
    return(
        <div>
          <ContextValue.Provider value={value}>  
              <CheckContext/>  
              <CheckContext1/>
          </ContextValue.Provider> 

        </div>
    )
}

// function CheckContext(){
//     return(
//         <ContextValue.Consumer>
//             {value=><h2>C1 , Value is : {value}</h2>}
//         </ContextValue.Consumer>
//     )
// }

function CheckContext(){
    const value=useContext(ContextValue)
    
    return(
         <h2>C1 , Value is : {value}</h2>
    )
}


function CheckContext1(){
    return(
        <ContextValue.Consumer>
            {value=><h2>C2 , Value is : {value}</h2>}
        </ContextValue.Consumer>
    )
}

export default UseContextDemo