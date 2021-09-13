import { useState, useEffect } from 'react';
// import { CurrentUserContext } from "./context/currentUser"
// import Navbar from "./navbar/Navbar"
import { Route, Switch } from 'react-router-dom';
import Gate from './Gate';
import Home from './Home';
import Navbar from './Navbar';
import Gifts from './Gifts';
import People from './People';

function App() {

  // const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  const [currentUser, setCurrentUser] = useState(null)
  const [userGifts, setUserGifts] = useState([])
  const [userPeople, setUserPeople] = useState([])
  // const [peopleEditing, setPeopleEditing] = useState(null)
  // const [peopleEditFormData, setPeopleEditFormData] = useState("")


  console.log("current user is: ", currentUser)

  useEffect(() => {
     fetch("/me")
   .then(response => { 
    // if currentUser is authorized(sign in was successful), then currentUser will be set in state/dispatch action which sets currentUser.
    // if currentUser is not authorized, see next comment 
      if(response.ok) { 
        response.json().then( (currentUser) => {setCurrentUser(currentUser); setUserGifts(currentUser.gifts); setUserPeople(currentUser.people) } )
      }
    })
  
 
  }, []);

  // if fetch sends back 'unauthorized' message, we render the signup and login page(gate)
  
  if(currentUser === null) {return <Gate onLogin={handleLogin} />}

  function handleLogin(user, gifts, people) {
    setCurrentUser(user)
    setUserGifts(gifts)
    setUserPeople(people)
  }

 function handleLogout() {
  (setCurrentUser(null))
 }

 function handleAddPerson(newPersonInfo) {
  fetch("/people", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPersonInfo)
  })
  .then( r => r.json() )
  .then( (rData) => setUserPeople([...userPeople, rData]) )
 }

 function handlePersonEdit(updateData, updateId) {
  fetch(`/people/${updateId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  })
  .then(r => r.json() )
  .then( (rData) => {
     const updatedPeople = currentUser.people.map( (person) => {
    if(person.id === updateId) { return rData}
    else {return person}
    } )
    console.log("UPDATED PEOPLE: ", updatedPeople)
    setUserPeople(updatedPeople)
  } )
  // update the person in state. map over user
 
 }

  console.log("USER GIFTS: ", userGifts)
  console.log("USER People: ", userPeople)
//  const renderGifts = currentUser.gifts.map( (gift) => <p key={uuid()}>{gift.name}</p> )

  return (
    <>
      <Navbar currentUser={currentUser} onLogout={handleLogout}/>
      <Switch>
        <Route exact path="/gifts">
          <Gifts gifts={userGifts}/>
        </Route>
        <Route exact path="/people">
          <People currentUser={currentUser} people={userPeople} onAddPerson={handleAddPerson} onPersonEdit={handlePersonEdit}/>
        </Route>
        <Route exact path="/gate">
          <Gate onLogin={handleLogin}/>
        </Route>
        <Route exact path="/"> 
          <Home/>
        </Route>
      </Switch>
      
      {/* <h1>Welcome to Gift-X {currentUser.name}</h1>
      <h3>Gifts</h3>
      {renderGifts}
      <button onClick={handleLogout}>Logout</button> */}
      
      
    </>
  );
}

export default App;


