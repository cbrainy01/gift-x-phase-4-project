import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import GiftItem from './GiftItem'

function Gifts({gifts, people, userId, onGiftCreate, onGiftEdit, onGiftDelete}) {
    
    const [formData, setFormData] = useState({
        user_id: userId,
        person_id: "",
        name: "",
        rating: "",
        date: "",
        fulfilled: "",
        incoming: "",
    })

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleRadioChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value === "true" ? true : false })
   }
   
    function handleSubmit(e) {
        e.preventDefault()
        onGiftCreate(formData)
        setFormData({
            user_id: userId,
            person_id: "",
            name: "",
            rating: "",
            date: "",
            fulfilled: "",
            incoming: "",
        })
    }

    function optionDropdown() {
        const renderOptions = people.map( (person) => {
            return <option key={uuid()} value={person.id}>{person.name}</option>
        } )
        return renderOptions;
    }

    const renderGifts = gifts.map( (gift) => <GiftItem key={uuid()} gift={gift} onGiftEdit={onGiftEdit} onGiftDelete={onGiftDelete} /> )
    console.log("GIFT FORM DATA: ", formData)
    return (
        <div>
            <h1>Gifts</h1>
            <form onSubmit={handleSubmit}>
            <label>Gift name: </label>
                <input onChange={handleChange} id="name" name="name" type="text" value={formData.name}></input><br></br>
            <label for="rating">Rating (between 0 and 10):</label>
                <input onChange={handleChange} type="range" id="rating" name="rating" min="0" max="10" value={formData.rating}></input><p>{formData.rating}</p><br></br>
            <label for="date">Date of exchange/potential date of exchange</label>
                <input onChange={handleChange} type="date" id="date" name="date"></input><br></br><br/>

            <label>Gift status</label><br></br>
            <label> Fulfilled</label>  
            <input onChange={handleRadioChange} name="fulfilled" type="radio" value={"true"}></input>
            <label> Unfulfilled</label>  
            <input onChange={handleRadioChange} name="fulfilled" type="radio" value={"false"}></input><br/><br/>

            <label>Incoming or outgoing gift?</label><br></br>
            <label> Incoming gift</label>    
            <input onChange={handleRadioChange} name="incoming" type="radio" value={"true"}></input>
            <label> Outgoing gift</label>
            <input onChange={handleRadioChange} name="incoming" type="radio" value={"false"}></input><br/><br/>
            
            <label>Person gift is to/from</label>
              <select name="person_id" value={formData.person_id} onChange={handleChange}>
                <option value="">select person</option>
                {optionDropdown()}
            </select>
            <br></br><button>Add gift</button>
            </form>
            {renderGifts}
        </div>
    )
}

export default Gifts
