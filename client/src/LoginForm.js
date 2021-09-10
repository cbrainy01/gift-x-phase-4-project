import React, { useState } from 'react'

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
        // create post request to login path
        // fetch("/login")
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><input onChange={handleChange} name="username" type="text"></input><br></br>
                <label>Password:</label><input onChange={handleChange} name="password" type="password"></input><br></br>
               
                <button>Login</button>
            </form>
        </div>
 
 
 
 )
}

export default LoginForm
