import React from 'react'

function Person({person, currentUser}) {
    
    const giftsGiven = person.gifts.filter( (gift) => gift.incoming === true )
    const giftsRecieved = person.gifts.filter( (gift) => { 
        if(gift.incoming === false && gift.fulfilled === true) {return true}
    } )
    const renderGiven = giftsGiven.map( (gift) => <p>name: {gift.name}, date : {gift.date}, you rated the gift: {gift.rating}</p> )
    const renderRecieved = giftsRecieved.map( (gift) => <p>name: {gift.name}, date : {gift.date}</p> )
    console.log("given to user: ", giftsGiven)
    console.log("given recieved from user: ", giftRecieved)
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Helpful insights: {person.info}</p>
            <h4>Gifts recieved from {person.name}</h4>
                {renderGiven} 
            <h4>Gifts you gave {person.name}</h4>
                {renderRecieved}      
        </div>
    )
}

export default Person
