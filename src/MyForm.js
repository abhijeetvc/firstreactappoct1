import React from 'react'

function MyForm(){

    const personObj={
        "firstName":"",
        "lastName":"",
        "email":"",
        "city":""
    }

    const [person,setPerson]=React.useState(personObj)

    const onValueChange=(event)=>{
         console.log(event.target);
         setPerson({...person,[event.target.name]:event.target.value})
    }

    const displayData=(e)=>{
        e.preventDefault()
        console.log(person);
    }
    
    return(
        <div>
            <form onSubmit={displayData}>
                <label> FirstName : </label>
                <input type="text" name="firstName" onChange={onValueChange}/>

                <label> LastName : </label>
                <input type="text" name="lastName" onChange={onValueChange}/>
                
                <label> Email : </label>
                <input type="text" name="email" onChange={onValueChange}/>
                
                <label> City : </label>
                <input type="text" name="city" onChange={onValueChange}/>

                <input type="submit" value="Submit"/>                
            </form>
        </div>
    )
}

export default MyForm