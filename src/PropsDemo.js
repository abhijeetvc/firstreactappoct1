// Props : Properties/Information that is passed from one component to another component
          // Props are immutable.

import Cars from "./Cars"
import ChildComponent from "./ChildComponent"

function PropsDemo(){

    const message="Hello React Props!!!"

    const person={
        firstName:"John",
        lastName:"Doe",
        city:"Pune"    
    }

    const cars=[{
        id:1,
        brand:"Audi",
        color:"White",
        price:750000
    },{
        id:2,
        brand:"BMW",
        color:"Black",
        price:800000
    },{
        id:3,
        brand:"Mercedeez",
        color:"Blue",
        price:100000
    }]

    return(
        <div>
            <h1>Props Demo</h1>
            <ChildComponent person={person}/>
            <Cars cars={cars}/>
        </div>
    )
}


export default PropsDemo