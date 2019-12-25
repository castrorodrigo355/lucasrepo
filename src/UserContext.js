import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {

    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState(false);

    return (
        <UserContext.Provider 
            value = {
                {
                    checked,
                    toogleChecked: val => setChecked(val),
                    users,
                    getUser: user => console.log(user), 
                    getUsers: listUsers => setUsers(listUsers), 
                    addUser: user => setUsers([...users, user]), 
                    deleteUser: id => setUsers(users.filter(user => user.id !== id))
                }
            }>
            {props.children}
        </UserContext.Provider>
    )
}