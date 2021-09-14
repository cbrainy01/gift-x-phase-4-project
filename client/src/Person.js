
import React, { useState } from 'react'
import { v4 as uuid } from "uuid"


function Person({person, currentUser, onPersonEdit, onPersonDelete}) {
    
    const [personEditing, setPersonEditing] = useState(null)
    const [personEditFormData, setPersonEditFormData] = useState({
        name: person.name,
        image: person.image,
        info: person.info,
    })

    function handleChange(event) {
        setPersonEditFormData({ ...personEditFormData, [event.target.name]: event.target.value })
    }
    function handleClick(event) {
        event.preventDefault()
        onPersonEdit(personEditFormData, person.id)
        setPersonEditing(null)
    }

    function handleClickDelete() {
        onPersonDelete(person.id)
    }

    const giftsUserGaveOut = person.gifts.filter( (gift) => gift.incoming === true )
    const giftsRecieved = person.gifts.filter( (gift) => gift.incoming === false && gift.fulfilled === true)
    const renderGaveOut = giftsUserGaveOut.map( (gift) => <p key={uuid()}>name: {gift.name}, date : {gift.date}, you rated the gift: {gift.rating}</p> )
    const renderRecieved = giftsRecieved.map( (gift) => <p key={uuid()}>name: {gift.name}, date : {gift.date}</p> )
    
    console.log("given to user: ", giftsUserGaveOut)
    console.log("given recieved from user: ", giftsRecieved)
    console.log("EDITS: ", personEditFormData)

    return (
        <div>

                 {personEditing === person.id ? 
                 (
                 <>
                    <p>Input fields for edit</p>
                    <label>Person name: </label>
                <input onChange={handleChange} id="name" name="name" type="text" value={personEditFormData.name}></input><br></br>
                <label>Person image_url: </label>
                <input onChange={handleChange} id="image" name="image" type="text" value={personEditFormData.image}></input><br></br>
                <label>Info about person: </label>
                <textarea onChange={handleChange} id="info" name="info" rows="4" cols="50" value={personEditFormData.info}> </textarea><br></br>
                 </>
                ) 
                 :
                 (
                 <>
                    <h3 style={{color: "blue"}}> {person.name}</h3>
                    <p>Helpful insights: {person.info}</p>
                    <h4>Gifts recieved from {person.name}</h4>
                    {renderGaveOut} 
                    <h4>Gifts you gave {person.name}</h4>
                 </>) 
                 }

                {personEditing !== null ? (<button onClick={handleClick}>Submit edit</button> ) : (<button onClick={ () => setPersonEditing(person.id) }>Edit person info</button> )}
                 
                
                <button onClick={handleClickDelete}>Delete person</button>
                 
        </div>
    )
}

export default Person
