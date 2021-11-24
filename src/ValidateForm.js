import React from 'react'

function ValidateForm(){

    const[fullName,setFullName]=React.useState('')
    const[email,setEmail]=React.useState('')
    const[password,setPassword]=React.useState('')

    const errorObj={
        fullName:'',
        email:'',
        password:''
    }

    const[error,setError]=React.useState(errorObj)

    // const person={
    //     name:'abc',
    //     email:'abc@gmail.com',
    //     city:'Pune'
    // }

    // const {name, email, city}=person
    // console.log(name);

    const handleChange=(event)=>{
        event.preventDefault()

        const {name, value}=event.target
         let checkError

        switch(name){
            case 'fullName':
                console.log('Checking Full Name field!!!');
                checkError=value.length<6 ? 'Full Name Length must be greater than equal to 6':''
                break;

            default:
                break;    
        }

        setError({...error,[name]:checkError})

        console.log(error);

    }

    const submitData=()=>{

    }

    return(
        <div>
            <h1>Registeration</h1>
            <form onSubmit={submitData}> 
                <div>
                    <label> FullName : </label>
                    <input type='text' name='fullName' onChange={handleChange} />
                    {
                        error.fullName.length>0 &&
                        <span>{error.fullName}</span>
                    }
                </div>

                <div>
                    <label> Email : </label>
                    <input type='email' name='email' onChange={handleChange} />
                    {
                        error.email.length>0 &&
                        <span>{error.email}</span>
                    }
                </div>

                <div>
                    <label> Password : </label>
                    <input type='password' name='password' onChange={handleChange} />
                    {
                        error.password.length>0 &&
                        <span>{error.password}</span>
                    }
                </div>
                <div>
                    <input type='submit' value='Submit'/>
                </div>
            </form>
        </div>
    )
}

export default ValidateForm