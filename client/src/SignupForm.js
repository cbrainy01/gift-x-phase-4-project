import React, { useState } from 'react'

function SignupForm() {
   
    // dispatch would either cause a new user to be created and return the user or return errors

    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        passwordConfirmation: "",
    })


    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><input onChange={handleChange} name="name" type="text"></input><br></br>
                <label>Username:</label><input onChange={handleChange} name="username" type="text"></input><br></br>
                <label>Password:</label><input onChange={handleChange} name="password" type="text"></input><br></br>
                <label>Confirm password:</label><input onChange={handleChange} name="passwordConfirmation" type="text"></input><br></br>
                
               <button>Sign up</button>
            </form>
        </div>
 
 
 
 )
}

export default SignupForm
