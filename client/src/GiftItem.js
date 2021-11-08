import React, { useState } from 'react'

function GiftItem({gift, onGiftEdit, onGiftDelete}) {
    // console.log("Current gift is: ", gift)
    // console.log("person : ", gift.person.name)
        

    const [giftEditing, setGiftEditing] = useState(null)
    const [giftEditFormData, setGiftEditFormData] = useState({
        name: gift.name,
        person_id: gift.person_id,
        date: gift.date,
        fulfilled: gift.fulfilled,
        incoming: gift.incoming,
        rating: gift.rating
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

    function handleClickDelete() {
        onGiftDelete(gift.id, gift.person_id)
    }

    function renderGift() {
        if(gift.incoming) {return (
            <div>
            {giftEditing === gift.id ?
        (<>
            <label>Gift name: </label>
                <input onChange={handleChange} name="name" type="text" value={giftEditFormData.name}></input><br></br>
            <label >Date of exchange/potential date of exchange</label>
                <input onChange={handleChange} type="date" id="date" name="date" value={giftEditFormData.date}></input><br></br>
        </>)    
        : 
        (<><h3 style={{color: "blue"}} >{gift.name}</h3>
                <p className="text">Recieved from {gift.person.name} on {gift.date}</p></>)
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
            <label >Date of exchange/potential date of exchange</label>
                <input onChange={handleChange} type="date" id="date" name="date" value={giftEditFormData.date}></input><br></br>
                </>) 
                :
                (<div className="text"><h3 style={{color: "blue"}} >{gift.name}</h3>
            <p>To: {gift.person.name}</p>
            <p>Date of exchange: {gift.date}</p>
            <p>{gift.fulfilled? "Gift has been fulfilled": "Gift has not been fulfilled" }</p></div>)}
            
            
            </div>)
        }
    }

    return (
        <div className="li">
            {renderGift()}

            {giftEditing !== null ? (<button className="button1" onClick={handleClick}>Submit edit</button> ) : (<button className="button1" onClick={ () => setGiftEditing(gift.id) }>Edit gift info</button> )}
            <button className="button2" onClick={handleClickDelete}>delete gift</button>
        </div>
    )
}

export default GiftItem
