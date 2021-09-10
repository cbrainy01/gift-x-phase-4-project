import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'

function Gate() {
    const [showLogin, setShowLogin] = useState(true);
    // import user variable

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm/>
                    <p>New to Gift-X?</p>
                    <button onClick={ () => setShowLogin(false) }>Sign up</button>
                </>
            ) 
            : 
            (
                <>
                    <SignupForm/>
                    <p>Already have an account?</p>
                    <button onClick={ () => setShowLogin(true) }>Log in</button>
                </>
            ) }
        </div>
    )
}

export default Gate
