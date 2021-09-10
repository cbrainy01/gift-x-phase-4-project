import { useState, useEffect } from 'react';
import Gate from './Gate';
import './App.css';

function App() {
  
  const [user, setUser] = useState(null);
  
  useEffect(() => {
  
   fetch("/me")
   .then(response => { 
    // if user is authorized(sign in was successful), then user will be set in state/dispatch action which sets user.
    // if user is not authorized, see next comment 
      if(response.ok) { 
        response.json().then( (user) => setUser(user) )
      }
    })
 
  }, []);

  // if fetch sends back 'unauthorized' message, we render the signup and login page(gate)
  
  if(user === null) {return <Gate/>}
  
 function handleClick() {
   
  fetch("/logout", {
     method: 'DELETE',
     headers: {'Content-type': 'application/json'},
   })
  //  set user to null so we can be redirected to the gate
  .then(setUser(null))
  //  .then(r => r.json())
  //  .then(  )

 }
  
  console.log(user)
  return (
    <div className="App">
      <button onClick={handleClick}>Logout</button>
      {/* setup navbar */}
      {/* setup routes with paths */}
    </div>
  );
}

export default App;
