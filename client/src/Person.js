
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
    const renderGaveOut = giftsUserGaveOut.map( (gift) => <p key={uuid()}>- {gift.name}, date : {gift.date}, you rated the gift: {gift.rating}</p> )
    const renderRecieved = giftsRecieved.map( (gift) => <p key={uuid()}>name: {gift.name}, date : {gift.date}</p> )

    return (
        <div className="li">
            {person.image ? (<img src={person.image}/>) : (<img width="150" height="200" src="https://glenwood.org/wp-content/uploads/2019/12/blank-profile-picture-973460_1280-300x300.jpg"/>) }
                 {personEditing === person.id ? 
                 (
                 <div className="inputs">
                    <label>Person name: </label>
                <input onChange={handleChange} id="name" name="name" type="text" value={personEditFormData.name}></input><br></br>
                <label>Person image_url: </label>
                <input onChange={handleChange} id="image" name="image" type="text" value={personEditFormData.image}></input><br></br>
                <label>Info about person: </label>
                <textarea onChange={handleChange} id="info" name="info" rows="4" cols="50" value={personEditFormData.info}> </textarea><br></br>
                 </div>
                ) 
                 :
                 (
                 <div className="text">
                    <h3 style={{color: "blue"}}> {person.name}</h3>
                    <p>Helpful insights: {person.info}</p><br/>
                    <h4>Gifts recieved from {person.name}: </h4>
                    {renderGaveOut}
                    <br/><h4>Gifts you gave {person.name}: </h4>
                 </div>) 
                 }

                {personEditing !== null ? (<button className="button1" onClick={handleClick}>Submit edit</button> ) : (<button className="button1" onClick={ () => setPersonEditing(person.id) }>Edit person info</button> )}
                 
                
                <button className="button2" onClick={handleClickDelete}>Delete person</button>
                 
        </div>
    )
}

export default Person
