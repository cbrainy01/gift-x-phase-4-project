import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import GiftItem from './GiftItem'

function Gifts({gifts, people, userId, onGiftCreate}) {
    
    const [formData, setFormData] = useState({
        user_id: userId,
        person_id: "",
        name: "",
        rating: "",
        date: "",
        fulfilled: false,
        incoming: false,
    })

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }
    function handleCheckboxChange(event) {
        // console.log("fulfilled value: ", event.target.value)
        // let newVal = event.target.value
    //      if(formData.incoming === "true") {
    //     formData.fulfilled = true
    //      }
        setFormData({ ...formData, [event.target.name]: event.target.value === "false" ? true : false  })
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
            fulfilled: false,
            incoming: false,
        })
    }

    function optionDropdown() {
        const renderOptions = people.map( (person) => {
            return <option key={uuid()} value={person.id}>{person.name}</option>
        } )
        return renderOptions;
    }

    const renderGifts = gifts.map( (gift) => <GiftItem key={uuid()} gift={gift} /> )
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
                <input onChange={handleChange} type="date" id="date" name="date"></input><br></br> 
                <input onChange={handleCheckboxChange } type="checkbox" id="fulfilled" name="fulfilled" value={formData.fulfilled}></input>
            <label for="fulfilled"> Fulfilled</label><br></br>  
                <input onChange={handleCheckboxChange } type="checkbox" id="incoming" name="incoming" value={formData.incoming}></input>
            <label for="incoming"> Recieved gift</label><br></br>
            
            <label>Person gift is being exchanged with</label>
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
