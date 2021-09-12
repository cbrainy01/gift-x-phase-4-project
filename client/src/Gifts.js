import React from 'react'

function Gifts({gifts}) {
    
    const renderGifts = gifts.map( (gift) => (
        <>
            <p>{gift.name}</p>
            <p>{gift.date}</p>
        </>
    ) )
    
    return (
        <div>
            All gifts
            {renderGifts}
        </div>
    )
}

export default Gifts
