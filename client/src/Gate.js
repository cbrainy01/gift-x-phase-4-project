import React, { useState } from 'react'

function Gate() {
    const [showLogin, setShowLogin] = useState(true);
    // import user variable

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm/>
                    <p>Dont have an account?</p>
                    <button onClick={ () => setShowLogin(true) }>Sign up</button>
                </>
            ) 
            : 
            (
                <>
                    <SignupForm/>
                    <p>Already have an account?</p>
                    <button onClick={ () => setShowLogin(false) }>Log in</button>
                </>
            ) }
        </div>
    )
}

export default Gate
