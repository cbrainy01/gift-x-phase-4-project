import { useState, useEffect, useContext } from 'react';
import Gate from './Gate';
import './App.css';
import { CurrentUserContext } from "./context/currentUser"
import Navigation from "./Navigation"
import { Route, Switch } from 'react-router-dom';
import TestComp from './TestComp';

function App() {

  // const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState(null);
  
  // const [userGifts, setUserGifts] = useState([])
  // const [userPeople, setUserPeople] = useState([])

  console.log("current user is: ", currentUser)

  useEffect(() => {
  
   fetch("/me")
   .then(response => { 
    // if currentUser is authorized(sign in was successful), then currentUser will be set in state/dispatch action which sets currentUser.
    // if currentUser is not authorized, see next comment 
      if(response.ok) { 
        // response.json().then( (currentUser) => {setCurrentUser(currentUser); setUserGifts(currentUser.gifts); setUserPeople(currentUser.people)} )
        response.json().then( (currentUser) => {setCurrentUser(currentUser)} )
      }
    })
 
  }, []);

  // if fetch sends back 'unauthorized' message, we render the signup and login page(gate)
  
  if(currentUser === null) {return <Gate onLogin={handleLogin}/>}

  function handleLogin(user) {
    setCurrentUser(user)
  }

 function handleLogout() {
   
  fetch("/logout", {
     method: 'DELETE',
     headers: {'Content-type': 'application/json'},
   })
  //  set currentUser to null so we can be redirected to the gate
  .then(setCurrentUser(null))
 }
  // console.log("USER GIFTS: ", userGifts)
  // console.log("USER People: ", userPeople)
 const renderGifts = currentUser.gifts.map( (gift) => <p>{gift.name}</p> )

  return (
    <div className="App">
      <Navigation/>
      <testComp/>
      <p>Welcome to Gift-X{currentUser.name}</p>
    <button onClick={handleLogout}>Logout</button> 

      {/* <Navigation/>
      <h1>Welcome to Gift-X {currentUser.name}</h1>
      <h3>Gifts</h3>
      {renderGifts}
      <button onClick={handleLogout}>Logout</button> */}
      
      {/* setup navbar */}
      {/* setup routes with paths */}
      {/* <Switch>
        <Route path="???">
          {/* insert component for path */}
        {/* </Route> */}
      {/* // </Switch> */} 
    </div>
  );
}

export default App;


