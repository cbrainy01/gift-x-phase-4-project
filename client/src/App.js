import { useState, useEffect, useContext } from 'react';
import Gate from './Gate';
import './App.css';
import { CurrentUserContext } from "./context/currentUser"
import Navigation from "./Navigation"

function App() {

  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  
  console.log("current user is: ", currentUser)

  useEffect(() => {
  
   fetch("/me")
   .then(response => { 
    // if currentUser is authorized(sign in was successful), then currentUser will be set in state/dispatch action which sets currentUser.
    // if currentUser is not authorized, see next comment 
      if(response.ok) { 
        response.json().then( (currentUser) => setCurrentUser(currentUser) )
      }
    })
 
  }, []);

  // if fetch sends back 'unauthorized' message, we render the signup and login page(gate)
  
  if(currentUser === null) {return <Gate />}

 function handleLogout() {
   
  fetch("/logout", {
     method: 'DELETE',
     headers: {'Content-type': 'application/json'},
   })
  //  set currentUser to null so we can be redirected to the gate
  .then(setCurrentUser(null))
 }
  
  return (
    <div className="App">
      <h1>Welcome to Gift-X {currentUser.name}</h1>
      <button onClick={handleLogout}>Logout</button>
      {/* <Navigation/> */}
      {/* setup navbar */}
      {/* setup routes with paths */}
    </div>
  );
}

export default App;


