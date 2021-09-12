import React from 'react'
import { v4 as uuid } from "uuid"

function Gifts({gifts}) {
    
    const renderGifts = gifts.map( (gift) => (
        <div key={uuid()}> 
            <p>{gift.name}</p>
            <p>{gift.date}</p>
        </div>
    ) )
    
    return (
        <div>
            All gifts
            {renderGifts}
        </div>
    )
}

export default Gifts
