import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm'

function Gate({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
    // import user variable

    function handleFormSelection(boolean) {
        setShowLogin(boolean)
    }

    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} onFormSelect={handleFormSelection}/> 
                </>
            ) 
            : 
            (
                <>
                    <SignupForm onLogin={onLogin} onFormSelect={handleFormSelection}/>
                </>
            ) }
        </div>
    )
}

export default Gate
