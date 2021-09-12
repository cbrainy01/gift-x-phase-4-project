import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

function People({currentUser, people, onAddPerson}) {
    
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
    }

    const renderPeople = people.map( (person) => (
        <div key={uuid()}>
            <p>{person.name}</p>
            <p>{person.info}</p>
        </div>
    ) )
    
    console.log("NEW PERSON IFO: ", formData)
    return (
        <div>
            <h1>People</h1>
            <form onSubmit={handleSubmit}>
                <label>Person name: </label>
                <input onChange={handleChange} id="name" name="name" type="text" value={formData.name}></input><br></br>
                <label>Person image_url: </label>
                <input onChange={handleChange} id="image" name="image" type="text" value={formData.image}></input><br></br>
                <label>Info about person: </label>
                <textarea onChange={handleChange} id="info" name="info" rows="4" cols="50" value={formData.info}> </textarea><br></br>
                <button>Add Person</button>
            </form>            
            {renderPeople}
        </div>
    )
}

export default People
