import React from 'react'

function Person({person, currentUser}) {
    
    const giftsUserGaveOut = person.gifts.filter( (gift) => gift.incoming === true )
    const giftsRecieved = person.gifts.filter( (gift) => gift.incoming === false && gift.fulfilled === true)
    const renderGaveOut = giftsUserGaveOut.map( (gift) => <p>name: {gift.name}, date : {gift.date}, you rated the gift: {gift.rating}</p> )
    const renderRecieved = giftsRecieved.map( (gift) => <p>name: {gift.name}, date : {gift.date}</p> )
    
    console.log("given to user: ", giftsUserGaveOut)
    console.log("given recieved from user: ", giftsRecieved)

    return (
        <div>
            <h3 style={{color: "blue"}}> {person.name}</h3>
            <p>Helpful insights: {person.info}</p>
            <h4>Gifts recieved from {person.name}</h4>
                {renderGaveOut} 
            <h4>Gifts you gave {person.name}</h4>
                {renderRecieved}    
                <button>Edit person info</button>  
                <button>Delete person</button>  
        </div>
    )
}

export default Person
