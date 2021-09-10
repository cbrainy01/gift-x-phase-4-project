
// ACTION CREATORS
export function login(currentUser) {
    return {
        type: "login",
        payload: currentUser,
    }
}

export function logout() {
    return {
        type: "logout",
    }
}



// REDUCER

const initialState = null

export default function currentUserReducer(state = initialState, action) {
    
    switch(action.type) {
        case "login": ;
            // return the user which would be gotten from payload
            return currentUser    
        
        case "logout": 
            return null;
        default: return state
    }

}