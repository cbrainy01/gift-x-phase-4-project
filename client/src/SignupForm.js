import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

function SignupForm() {
   
    // dispatch would either cause a new user to be created and return the user or return errors

    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    })

    console.log("signup form data: ", formData)


    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        // if response is okay, set up dispatch which adds user to table of users
        // if response isnt okay, set errors
        .then( response => {
            if(response.ok) {
                console.log("dispatch")
                response.json().then( (rData) => {console.log("SET UP DISPATCH WITH THIS DATA: ", rData); setFormData({
                    name: "",
                    username: "",
                    password: "",
                    password_confirmation: "",
                }); setErrors([])   } )
            } else {
                response.json().then( (rData) => { setErrors(rData.errors);     } )
            }
        } )

    }

    console.log("ERRORS: ", errors)

    const renderErrors = errors.map( (error) => <p key={uuid()} style={{color: "red"}}>{error}</p> )
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><input onChange={handleChange} name="name" type="text" value={formData.name}></input><br></br>
                <label>Username:</label><input onChange={handleChange} name="username" type="text" value={formData.username}></input><br></br>
                <label>Password:</label><input onChange={handleChange} name="password" type="password" value={formData.password}></input><br></br>
                <label>Confirm password:</label><input onChange={handleChange} name="password_confirmation" type="password" value={formData.password_confirmation}></input><br></br>
                
               <button>Sign up</button>
            </form>
            
            {errors ? renderErrors : <></> }
        </div>
 
 
 
 )
}

export default SignupForm
