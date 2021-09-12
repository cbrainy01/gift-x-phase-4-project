import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'

function Gate({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
    // import user variable

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin}/>
                    <p>New to Gift-X?</p>
                    <button onClick={ () => setShowLogin(false) }>Sign up</button>
                </>
            ) 
            : 
            (
                <>
                    <SignupForm onLogin={onLogin}/>
                    <p>Already have an account?</p>
                    <button onClick={ () => setShowLogin(true) }>Log in</button>
                </>
            ) }
        </div>
    )
}

export default Gate
