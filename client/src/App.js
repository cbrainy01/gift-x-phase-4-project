import { useState, useEffect } from 'react';
import Gate from './Gate';
import './App.css';

function App() {
  // change to currentUser
  const [currentUser, setCurrentUser] = useState(null);
  
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
  
  if(currentUser === null) {return <Gate/>}
  
 function handleClick() {
   
  fetch("/logout", {
     method: 'DELETE',
     headers: {'Content-type': 'application/json'},
   })
  //  set currentUser to null so we can be redirected to the gate
  .then(setCurrentUser(null))
  //  .then(r => r.json())
  //  .then(  )

 }
  
  console.log(currentUser)
  return (
    <div className="App">
      <button onClick={handleClick}>Logout</button>
      {/* setup navbar */}
      {/* setup routes with paths */}
    </div>
  );
}

export default App;
