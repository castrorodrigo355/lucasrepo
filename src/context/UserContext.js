import React, { useState, createContext } from 'react';
// import service from '../services/Service';
export const UserContext = createContext();

export function UserProvider(props) {

    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState(false);
    const [options, setOptions] = useState([])

    return (
        <UserContext.Provider 
            value = {
                {
                    checked, 
                    toogleChecked: val => setChecked(val), 

                    users, 
                    getUser: user => console.log(user), 
                    // getUsers: () => setUsers(service.getUsersService()), 
                    getUsers: () => {
                        fetch("https://jsonplaceholder.typicode.com/users")
                            .then(res => res.json())
                            .then(response => setUsers(response))
                            .catch(err => console.log(err))
                    }, 
                    addUser: user => setUsers([...users, user]), 
                    deleteUser: id => setUsers(users.filter(user => user.id !== id)), 

                    options, 
                    setSelectedOptions: newOptions => setOptions(newOptions)
                }
            }>
            {props.children}
        </UserContext.Provider>
    )
}