import React from 'react'

function People({people}) {
    const renderPeople = people.map( (person) => (
        <>
            <p>{person.name}</p>
            <p>{person.info}</p>
        </>
    ) )
    
    return (
        <div>
            All people
            {renderPeople}
        </div>
    )
}

export default People
