import React from 'react'

function GiftItem({gift}) {
    return (
        <div>
            <h3 style={{color: "green"}} >{gift.name}</h3>
        </div>
    )
}

export default GiftItem
