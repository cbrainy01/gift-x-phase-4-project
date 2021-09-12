import React from 'react'

function Person({person, currentUser}) {
    
    // const giftsGiven = 
    // const giftsRecieved =
    
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Helpful insights: {person.info}</p>
        </div>
    )
}

export default Person
