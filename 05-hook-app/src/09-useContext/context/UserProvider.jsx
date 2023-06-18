import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Diego Ivan',
//     email: 'ivan_dieg@outlook.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    return(    
        // <UserContext.Provider value={{hola: 'Mundo', user}}>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}