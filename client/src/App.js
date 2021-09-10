import { useState, useEffect } from 'react';
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
  
  // if(user === null) {return <Gate/>}
  
 
  
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
