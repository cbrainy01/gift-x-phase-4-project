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
            <h3>
                <Link to="/">Gift-X</Link>
            </h3>
            <h3>
                <Link to="/gifts"> The Gifts</Link>
            </h3>
            <h3>
                <Link to="/people"> People</Link>
            </h3>
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
