import React from 'react'

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
            {/* <h3 style={{color: "lightgreen"}} >{gift.name}</h3> */}
            {/* date of exchange */}
            {/* <p>Date of exchange: {gift.date}</p> */}
            {/* gift rating (N/A if gift was given out) */}
            {/* <p>Gift rating: {gift.rating ? gift.rating: "N/A"}</p> */}
            {/* status: fulfilled or unfulfilled */}
            {/* <p>{gift.fulfilled && gift.incoming === false? "has been fulfilled" : "has not been fulfilled"}</p> */}
            {/* recieved from or given to */}
            {/* <p>{gift.incoming? "gift was recieved": "gift was given out by current user"}</p> */}
            {/* edit gift button */}
            <button>edit gift</button>
            {/* delete gift button */}
            <button>delete gift</button>
        </div>
    )
}

export default GiftItem
