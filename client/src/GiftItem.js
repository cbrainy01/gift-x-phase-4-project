import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

function GiftItem({gift}) {
    console.log("Current gift is: ", gift)
    function renderGift() {
        if(gift.incoming) {return (
            <>
                <h3 style={{color: "lightgreen"}} >{gift.name}</h3>
                <p>Recieved from {gift.person_name} on {gift.date}</p>
            </>
        )}
        else {
            return <>
            <h3 style={{color: "lightgreen"}} >{gift.name}</h3>
            <p>To: {gift.person_name}</p>
            <p>Date of exchange: {gift.date}</p>
            <p>{gift.fulfilled? "Gift has been fulfilled": "Gift has not been fulfilled" }</p>
            
            </>
        }
    }

    return (
        <div>
            {renderGift()}
            <button>edit gift</button>
            <button>delete gift</button>
        </div>
    )
}

export default GiftItem
