import React, { useState } from 'react'
import { v4 as uuid } from "uuid"
import GiftItem from './GiftItem'

function Gifts({gifts, people, userId, onGiftCreate, onGiftEdit, onGiftDelete}) {
    
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")
    const [formData, setFormData] = useState({
        user_id: userId,
        person_id: "",
        name: "",
        rating: "",
        date: "",
        fulfilled: "",
        incoming: "",
    })

    // create a filtered function then sort based on that filter
    // itll end up being filteredGifts.handleSort().map
    // test out filtered first by going to line 74 and replacing gifts with filteredGifts, changing state of filter and seeing if gifts get filtered
    // const filteredGifts = gifts.filter( (gift) => { 
    //     if(filter === "incoming only" && gift.incoming === true) {return true}
    //     else if(filter === "outgoing only" && gift.incoming === false) {return true}
    //     else {return true} 
    // })

    function filteredGifts() {
        if(filter === "incoming only") {
            return gifts.filter( (gift) => gift.incoming === true )    
        }
        else if(filter === "outgoing only") {
            return gifts.filter( (gift) => gift.incoming === false )  
        }
        else return gifts
    }

    function handleFilter(event) {
        setFilter(event.target.value)
    }
    console.log("current filter is: ", filter)
    console.log("filtered gifts is: ", filteredGifts)

    function handleSortChange(event) {
        setSort(event.target.value)
    }
    console.log("current sort is: ", sort)

    function handleSort() {
        
        switch(sort) {

            case "sort by date Oldest-Newest": ;
            case "sort by date Newest-Oldest": ;
            case "sort by rating hilo": ;
            case "sort by rating lohi": ;
            case "sort A-Z": ;
            case "sort Z-A": ;

            // either going to be gifts or filterdGifts
            default: return gifts
        }
        
    }

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

    const renderGifts = filteredGifts().map( (gift) => <GiftItem key={uuid()} gift={gift} onGiftEdit={onGiftEdit} onGiftDelete={onGiftDelete} /> )
    console.log("GIFT FORM DATA: ", formData)
    return (
        <div>
            <h1>Gifts</h1>

            {/* <label></label><br></br> */}
            <label> Show all gifts</label>  
            <input onChange={handleFilter} name="filter" type="radio" value={"all"}></input><br/>
            <label> Show all recieved gifts</label>  
            <input onChange={handleFilter} name="filter" type="radio" value={"incoming only"}></input><br/>
            <label> Show all outgoing gifts</label>  
            <input onChange={handleFilter} name="filter" type="radio" value={"outgoing only"}></input><br/><br/>

            <select onChange={handleSortChange}>
                <option value="">sort by</option>
                <option value="sort by rating hilo">rating(high-low)</option>
                <option value="sort by rating lohi">rating(low-high)</option>
                <option value="sort A-Z">name(A-Z)</option>
                <option value="sort Z-A">name(Z-A)</option>
            </select>

            <h2>New Gift Entry</h2>
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
            
            <label>Person gift is going to/coming from</label>
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
