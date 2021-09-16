import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

function SignupForm({onLogin, onFormSelect}) {
   
    const [errors, setErrors] = useState([])
    const [successfulMessage, setSuccessfulMessage] = useState("")    
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    })

    console.log("signup form data: ", formData)

    function handleClick() {
        onFormSelect(true)
    }

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
        // if response is okay, set current user to the created user(rData.user)
        // if response isnt okay, set errors
        .then( response => {
            if(response.ok) {
                response.json()
                .then( (rData) => {setSuccessfulMessage("Sign-up successful"); setFormData({
                    name: "",
                    username: "",
                    password: "",
                    password_confirmation: "",
                })}/*onLogin(rData.user)*/ )
               
            } else {
                response.json().then( (rData) => { setErrors(rData.errors);     } )
            }
        } )

    }

    console.log("ERRORS: ", errors)

    const renderErrors = errors.map( (error) => <p key={uuid()} style={{color: "red"}}>{error}</p> )
    
    return (
        <div className="bdy">
        <div className="center">
            <h1>Sign-up</h1>
            <form onSubmit={handleSubmit}>
                <div className="input_field">
                    <input onChange={handleChange} name="name" type="text" value={formData.name}></input><span></span><label>Name:</label>
                </div>
                <div className="input_field">
                    <input onChange={handleChange} name="username" type="text" value={formData.username}></input><span></span><label>Username:</label>
                </div>
                <div className="input_field">
                    <input onChange={handleChange} name="password" type="password" value={formData.password}></input><span></span><label>Password:</label>
                </div>
                <div className="input_field">
                   <input onChange={handleChange} name="password_confirmation" type="password" value={formData.password_confirmation}></input><span></span><label>Confirm password:</label> 
                </div>
                
               <button className="key">Sign up</button>
            </form>
            {successfulMessage ? <p>{successfulMessage}</p> : <></>}
            {errors ? renderErrors : <></> }
            <p>Already have an account?</p>
                    <button className="key2" onClick={handleClick}>Log in</button>
        </div>
        </div>
 
 
 )
}

export default SignupForm
