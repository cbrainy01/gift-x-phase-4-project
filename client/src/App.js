import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Gate from './Gate';
import Navbar from './Navbar';
import Gifts from './Gifts';
import People from './People';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [userGifts, setUserGifts] = useState([])
  const [userPeople, setUserPeople] = useState([])

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
  .then( (rData) => { 
    if(rData.errors) { alert( `Unable to add person due to the following:\n -${rData.errors.join(". -")}` ) }
    else {setUserPeople([...userPeople, rData]) }

  } )
 }

 function handlePersonEdit(updateData, updateId) {
  fetch(`/people/${updateId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  })
  .then(r => r.json() )
  .then( (rData) => {
    if(rData.errors) { alert( `Unable to edit person info due to the following:\n -${rData.errors.join(". -")}` ) }
    else {
    const updatedPeople = currentUser.people.map( (person) => {
    if(person.id === updateId) { return rData}
    else {return person}
    } )
    console.log("UPDATED PEOPLE: ", updatedPeople)
    setUserPeople(updatedPeople) }
  } )
 }

 function handleGiftEdit(updateData, updateId) {
   console.log("--updated data: ", updateData)
  fetch(`/gifts/${updateId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  })
  .then(r => r.json() )
  .then( (rData) => {
    console.log("--rData: ", rData)
    if(rData.errors) { alert( `Unable to edit gift info due to the following:\n -${rData.errors.join(".\n- ")}` ) }
    else {
    const updatedGifts = userGifts.map( (gift) => {
      if(gift.id === updateId) { return rData}
      else {return gift}
    } )
    console.log("UPDATED GIFT: ", rData)
    setUserGifts(updatedGifts)
    const updatedPeople = userPeople.map ( (person) => {
      if(person.id === rData.person_id) {
        // if the persons id matches the person id of the gift that was just updated, we want to change the persons gifts
        // to reflect the changes made.
      person.gifts = person.gifts.map( (gift) => { if (gift.id === updateId) {return rData} else {return gift} })
      // if the gifts id matches the id up gift that was just updated, return the updated version of that gift, otherwise,
      // return the gift for it was not updated. Then after all that, return the person. Its gifts array has been updated
       return person  
      }
      else {return person}
    })
    // console.log("updated people test: ", updatedPeople)
    setUserPeople(updatedPeople) }
  } )
 }

 function handleCreateGift(newGiftInfo) {
  fetch("/gifts", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newGiftInfo)
  })
  .then( r => {return r.json()} )
  .then( (rData) => {

    if(rData.errors) { alert( `Unable to add gift due to the following:\n -${rData.errors.join(".\n -")}` ) }
    else {
    setUserGifts([...userGifts, rData])
    const updatedPeople = userPeople.map( (person) => {
      if(person.id === rData.person_id) { person.gifts = [...person.gifts, rData]; return person }
      else {return person}
    } )
    setUserPeople(updatedPeople) }
  } )

 }

 function handleGiftDelete(deleteId, personId) {
   fetch(`/gifts/${deleteId}`, {
     method: 'DELETE',
     headers: {'Content-type': 'application/json;'},
   })
   .then( () => {
     const updatedGifts = userGifts.filter( (gift) => gift.id !== deleteId )
     setUserGifts(updatedGifts)
    //  go to user people and for remove that gift from ther persons gift array
    // first, find person gift is associated with
    // then filter that persons gift array and set persons gifts to that filtered version, then return the person
    const updatedPeople = userPeople.map( (person) => {
      if(person.id === personId){
        person.gifts = person.gifts.filter( (gift) => gift.id !== deleteId )
        return person
      }
      else {return person}
    } ) 
    setUserPeople(updatedPeople)
   })

 }

 function handlePersonDelete(personId) {
  // delete person from userPeople via a filter
  // go to userGifts and delete any gifts which have a person id which matches the deleted person
  fetch(`/people/${personId}`, {
    method: 'DELETE',
    headers: {'Content-type': 'application/json;'},
  })
  .then( () => {
    const updatedPeople = userPeople.filter( (person) => person.id !== personId )
    setUserPeople(updatedPeople)
    const updatedGifts = userGifts.filter( (gift) => gift.person_id !== personId )
    setUserGifts(updatedGifts)

  } )
 }

  console.log("USER GIFTS: ", userGifts)
  console.log("USER People: ", userPeople)

  return (
    <>
      <Navbar currentUser={currentUser} onLogout={handleLogout}/>
      <Switch>
        <Route exact path="/gifts">
          <Gifts gifts={userGifts} people={userPeople} userId={currentUser.id} onGiftCreate={handleCreateGift} onGiftEdit={handleGiftEdit} onGiftDelete={handleGiftDelete}/>
        </Route>
        <Route exact path="/people">
          <People currentUser={currentUser} people={userPeople} onAddPerson={handleAddPerson} onPersonEdit={handlePersonEdit} onPersonDelete={handlePersonDelete} />
        </Route>
        <Route exact path="/gate">
          <Gate onLogin={handleLogin}/>
        </Route>
        <Route exact path="/"> 
        <Gifts gifts={userGifts} people={userPeople} userId={currentUser.id} onGiftCreate={handleCreateGift} onGiftEdit={handleGiftEdit} onGiftDelete={handleGiftDelete}/>  
        </Route>
      </Switch>
       
    </>
  );
}

export default App;


