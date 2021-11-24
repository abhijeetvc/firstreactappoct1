import React,{ createContext, useContext } from "react";


const ContextValue=createContext()


function UseContextUpdate(){

    const [number,setNumber]=React.useState(200)

    const changeValue=()=>{
        setNumber(number+10)
    }
        return(
            <ContextValue.Provider value={{number,changeValue}}>
                <MyComp1/>
                <MyComp12/>
            </ContextValue.Provider>
        )
}

function MyComp1(){
     const {number,changeValue}=useContext(ContextValue)

    return(
       <div>
           <h2>C1, Value is : {number}</h2>
            <button onClick={changeValue}>ChangeValue</button>
       </div>
        
    )
}

function MyComp12(){
    const {number}=useContext(ContextValue)

   return(
       <h2>C2, Value is : {number}</h2>
   )
}

export default UseContextUpdate