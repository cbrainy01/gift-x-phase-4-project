import React from 'react'
import { Link } from "react-router-dom"
import "./styling/nav.css"
import { IoMenu } from "react-icons/io5";
import { IoGift } from "react-icons/io5";

function Navbar({ currentUser, onLogout }) {
    
    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
        }).then( onLogout() )
    
    }

    return (        
        <div className="body">
        <nav>
            <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <IoMenu/>
                    
                </label>
            <label > <Link className="logo" to="/">Gift-X</Link> <IoGift/> </label>
         <ul>
            <li>
                <Link className="link" to="/"> Gifts</Link>
            </li>
            <li>
                <Link className="link" to="/people"> People</Link>
            </li>
            <li>
                    <p>currently logged in: {currentUser.username}</p>
            </li>
            <li>
                <button onClick={handleLogout}>Logout</button>
            </li>
         </ul>
        </nav>
        </div>
    )
}

export default Navbar
