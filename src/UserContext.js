import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {

    const [users, setUsers] = useState([
        {id: 1, name: "james", course: "react"},
        {id: 2, name: "arthur", course: "angular"},
        {id: 3, name: "john", course: "vue"},
        {id: 4, name: "clark", course: "java"},
        {id: 5, name: "casidy", course: "pyhton"},
    ]);

    return (
        <UserContext.Provider 
            value = {
                {   
                    users, 
                    message: "Hello Context",
                    addUser: user => setUsers([...users, user]),
                    deleteUser: idx => setUsers(users.filter((user, i) => i !== idx))
                }
            }>
            {props.children}
        </UserContext.Provider>
    )
}