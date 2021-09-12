import React from 'react'
import { Link } from "react-router-dom"

function Navbar({ currentUser, onLogout }) {
    
    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
        }).then( onLogout() )
    
    }

    return (
        <div>
            <h1>
                <Link to="/">Gift-X</Link>
            </h1>
            <h1>
                <Link to="/gifts"> The Gifts</Link>
            </h1>
            <>
                    <p>Welcome to Gift-X {currentUser.username}</p>
                    <button onClick={handleLogout}>Logout</button>
            </>
            {/* {currentUser ? (
                <>
                    <p>Welcome to Gift-X {currentUser.username}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : 
            (
                <Link to="/gate">Login</Link>
            ) } */}
        </div>
    )
}

export default Navbar
