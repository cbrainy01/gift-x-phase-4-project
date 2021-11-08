import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import "./styling/loginform.css"

function LoginForm({onLogin, onFormSelect}) {
    
    // const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    console.log("login form data: ", formData)

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleClick(event) {
        onFormSelect(false)
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        fetch("/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then( response => {
            console.log("resp: ", response)
            if(response.ok) {
                // set current user to what came from fetch(authenticated user) and set errors back to empty array
                response.json().then( (rData) => {/**setFormData({
                    username: "",
                    password: "",
                }); setErrors([]);*/    onLogin(rData, rData.gifts, rData.people)} )
            }
            else {
                response.json().then( rData => setErrors(rData.errors)  )
            }
        })

    }
    console.log("ERRORS: ", errors)
    const renderErrors = errors.map( (error) => <p key={uuid()} style={{color: "red"}}>{error}</p> )


    return (
        <div className="bdy">
        <div className="center">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input_field">
                    <input onChange={handleChange} name="username" type="text" value={formData.username} ></input><span></span><label>Username:</label>
                </div>
                <div className="input_field">
                     <input onChange={handleChange} name="password" type="password" value={formData.password} ></input><span></span><label>Password:</label>
                </div>
               
           
                <button className="key">Login</button>
            </form>

            {errors ? renderErrors : <></> }
            
                    <p>New to Gift-X?</p><button className="key2" onClick={handleClick}>Sign up</button>
        </div>
        </div>
 
 
 )
}

export default LoginForm
