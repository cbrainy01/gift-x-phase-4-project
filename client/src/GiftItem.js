import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

function GiftItem({gift, onGiftEdit}) {
    // console.log("Current gift is: ", gift)

    const [giftEditing, setGiftEditing] = useState(null)
    const [giftEditFormData, setGiftEditFormData] = useState({
        name: gift.name,
        person_id: gift.person_id,
        date: gift.date,
        fulfilled: gift.fulfilled,
    })
    console.log("---editformDATA: ", giftEditFormData)
    function handleChange(event) {
        setGiftEditFormData( {...giftEditFormData, [event.target.name]: event.target.value})
    }

    function handleRadioChange(event) {
         setGiftEditFormData({ ...giftEditFormData, [event.target.name]: event.target.value === "true" ? true : false })
    }

    function handleClick(event) {
        event.preventDefault()
        onGiftEdit(giftEditFormData, gift.id)
        setGiftEditing(null)
    }

    function renderGift() {
        if(gift.incoming) {return (
            <div>
            {giftEditing === gift.id ?
        (<>
            <label>Gift name: </label>
                <input onChange={handleChange} name="name" type="text" value={giftEditFormData.name}></input><br></br>
            <label for="date">Date of exchange/potential date of exchange</label>
                <input onChange={handleChange} type="date" id="date" name="date" value={giftEditFormData.date}></input><br></br>
        </>)    
        : 
        (<><h3 style={{color: "lightgreen"}} >{gift.name}</h3>
                <p>Recieved from {gift.person_name} on {gift.date}</p></>)
        }
                
            </div>
        )}
        else {
            return (<div>
                {giftEditing === gift.id ? 
                (<>
                    <label>Gift name: </label>
                <input onChange={handleChange} name="name" type="text" value={giftEditFormData.name}></input><br></br>
            <label>Fulfilled</label>
                <input onChange={handleRadioChange} name="fulfilled" type="radio" value={"true"}></input><br></br>
            <label>Unfulfilled</label>
                <input onChange={handleRadioChange} name="fulfilled" type="radio" value={"false"}></input><br></br>
            <label for="date">Date of exchange/potential date of exchange</label>
                <input onChange={handleChange} type="date" id="date" name="date" value={giftEditFormData.date}></input><br></br>
                </>) 
                :
                (<><h3 style={{color: "lightgreen"}} >{gift.name}</h3>
            <p>To: {gift.person_name}</p>
            <p>Date of exchange: {gift.date}</p>
            <p>{gift.fulfilled? "Gift has been fulfilled": "Gift has not been fulfilled" }</p></>)}
            
            
            </div>)
        }
    }

    return (
        <div>
            {renderGift()}
            
            {giftEditing !== null ? (<button onClick={handleClick}>Submit edit</button> ) : (<button onClick={ () => setGiftEditing(gift.id) }>Edit gift info</button> )}
            <button>delete gift</button>
        </div>
    )
}

export default GiftItem
