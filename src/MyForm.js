import React,{useEffect} from 'react'
import axios from 'axios'

function MyForm(){

    const personObj={
        "firstName":"",
        "lastName":"",
        "email":"",
        "city":""
    }

    const [person,setPerson]=React.useState(personObj)
    const [users,setUsers]=React.useState([])

    const onValueChange=(event)=>{
         console.log(event.target);
         setPerson({...person,[event.target.name]:event.target.value})
    }

    const user={
        userId:1,
        title:"Demo Title",
        body:"Demo Content"
    }

    const displayData=(e)=>{
        e.preventDefault()
        console.log(user);

        //logic for api call to be written here
        // fetch("https://jsonplaceholder.typicode.com/posts",{
        //     headers:{
        //         body:user,
        //         method:"POST",
        //         "Content-Type":"application/json"
        //     }
        // })
        //      .then(response=>{console.log(response.json());})      

        axios.post("https://jsonplaceholder.typicode.com/posts",user)
                .then(response=>{
                              console.log(response.status);
                    if(response.status==201){
                        console.log("Data submitted successfully!!!");
                     }else{
                         console.log("SOmething went wrong!!!");
                     }
                 })
    }


    // 1st way
    //  useEffect(()=>{
    //      console.log("hiiiiiiiiii");
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(res=>{
    //         setUsers(res)
    //     })
    //  })

    // 2nd way
    //  useEffect(()=>{
    //     console.log("hiiiiiiiiii");
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(res=>{
    //         setUsers(res)
    //     })
    //  },[])  // execute only once

    const[value,setValue]=React.useState(0)

     // 3rd way
    //  useEffect(()=>{
    //     console.log("hiiiiiiiiii");
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(res=>{
    //         setUsers(res)
    //     })
    //  },[value])


    const getData=()=>{

        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response=>response.json())
        //     .then(res=>{
        //         setUsers(res)
        //     })

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(res=>{
                console.log(res);
                setUsers(res)
            })
    }

    const changeValue=()=>{
        setValue(value+1)
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

            <button type="button" onClick={getData}>Get Data</button>
            <button type="button" onClick={changeValue}>Change Value</button>


            <ul>
                {users.map((user)=>(
                    <li>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyForm