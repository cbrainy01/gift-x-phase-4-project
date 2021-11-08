import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import Person from './Person'
import "./styling/people.css"
import "./styling/createpeople.css"

function People({currentUser, people, onAddPerson, onPersonEdit, onPersonDelete}) {
    
    const [formData, setFormData] = useState({
        user_id: currentUser.id,
        name: "",
        image: "",
        info: "",
    })

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddPerson(formData)
        setFormData({
            user_id: currentUser.id,
            name: "",
            image: "",
            info: "",
        })
    }

    // function handleClick() {
    //     onSort()
    // }

    function sortPeople() {
        return people.sort( (personA, personB) => {
          if(personA.gifts.length > personB.gifts.length) { return 1}
          else if(personA.gifts.length < personB.gifts.length) { return -1}
          else {return 0}
        } )
    
        // setUserPeople(sorted)
     }

    const renderPeople = sortPeople().map( (person) => <Person key={uuid()} person={person} currentUser={currentUser} onPersonEdit={onPersonEdit} onPersonDelete={onPersonDelete}/> )
    
    console.log("NEW PERSON IFO: ", formData)
    return (
        <div>
            <div className="body">
                <h1>People</h1>
                {/* <button onClick={sortPeople}>sort by gifts</button> */}
                <h3>Add person</h3>
                <form onSubmit={handleSubmit}>
                    <label>Person name: </label>
                    <input onChange={handleChange} id="name" name="name" type="text" value={formData.name}></input><br></br>
                    <label>Person image_url: </label>
                    <input onChange={handleChange} id="image" name="image" type="text" value={formData.image}></input><br></br>
                    <label>Info about person: </label>
                    <textarea onChange={handleChange} id="info" name="info" rows="4" cols="50" value={formData.info}> </textarea><br></br>
                    <button className="add_button">Add Person</button>
                </form>
            </div>
            <div className="ul">{renderPeople}</div>            
            
        </div>
    )
}

export default People

