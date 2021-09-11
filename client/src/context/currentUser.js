import { createContext, useState } from "react";

const CurrentUserContext = createContext();

function CurrentUserProvider( {children} ) {
    
    const [currentUser, setCurrentUser] = useState(null)
    const value = [currentUser, setCurrentUser]

    return(
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export { CurrentUserProvider, CurrentUserContext };