import React from 'react'


const validateEmailReg=RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

const formValidate=error=>{
    console.log(error);
    let isValid=true

    if(error.fullName.length>=6 && error.password.length>=6){
        return isValid
    }else{
        return !isValid
    }
    // Object.values(error).forEach(val=>{
    //     console.log(val + " : "+val.length);
    //     if(val.length>0){
    //         console.log('test' +isValid);
            
    //         return isValid
    //     }
    // })
    // console.log("Hiiiiii "+isValid);
    
    // return isValid
}

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
              //  console.log('Checking Full Name field!!!');
                error.fullName=value.length<6 ? 'Full Name Length must be greater than equal to 6':''
                break;

            case 'email':
                error.email=validateEmailReg.test(value)? '':'Invalid Email!!!'
                break;
                    
            case 'password':
                error.password=value.length<6 ? 'Invalid Password':''
                break; 

            default:
                break;    
        }

        setError({...error,[name]:value})

      //  console.log(error);

    }

    const submitData=(e)=>{
        e.preventDefault()
        //console.log(formValidate(error));
        if(formValidate(error)){

            console.log('Valid Form');
        }else{
            
            console.log('Invalid Form');
        }

    }

    return(
        <div>
            <h1>Registeration</h1>
            <form onSubmit={submitData}> 
                <div>
                    <label> FullName : </label>
                    <input type='text' name='fullName' onChange={handleChange} noValidate/>
                    {
                        error.fullName.length>0 &&
                        <span>{error.fullName}</span>
                    }
                </div>

                <div>
                    <label> Email : </label>
                    <input type='email' name='email' onChange={handleChange} noValidate/>
                    {
                        error.email.length>0 &&
                        <span>{error.email}</span>
                    }
                </div>

                <div>
                    <label> Password : </label>
                    <input type='password' name='password' onChange={handleChange} noValidate />
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