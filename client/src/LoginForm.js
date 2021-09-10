import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

function LoginForm() {
    
    // dispatch would either cause a new user to be created and return the user or return errors

    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        // name: "",
        username: "",
        password: "",
        // passwordConfirmation: "",
    })

    console.log("login form data: ", formData)

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then( response => {
            if(response.ok) {
                // dispatch action which would sign user in by setting user to whatever was gotten from rData and also clear fields and set errors back to empty array
                response.json().then( (rData) => {console.log("SET UP DISPATCH WITH THIS DATA: ", rData); setFormData({
                    username: "",
                    password: "",
                }); setErrors([])   } )
            }
            else {
                response.json().then( rData => setErrors(rData.errors) )
            }
        })

    }
    console.log("ERRORS: ", errors)
    const renderErrors = errors.map( (error) => <p key={uuid()} style={{color: "red"}}>{error}</p> )


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><input onChange={handleChange} name="username" type="text"></input><br></br>
                <label>Password:</label><input onChange={handleChange} name="password" type="password"></input><br></br>
               
                <button>Login</button>
            </form>

            {errors ? renderErrors : <></> }
        </div>
 
 
 
 )
}

export default LoginForm
