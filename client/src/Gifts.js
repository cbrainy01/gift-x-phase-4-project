import React from 'react'
import { v4 as uuid } from "uuid"
import GiftItem from './GiftItem'

function Gifts({gifts}) {
    
    const renderGifts = gifts.map( (gift) => <GiftItem key={uuid()} gift={gift}/> )
    
    return (
        <div>
            All gifts
            {renderGifts}
        </div>
    )
}

export default Gifts
