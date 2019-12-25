import React, { useContext } from 'react';
import { UserContext } from "./UserContext"

export default function UsersList() {
    const [users, setUsers] = useContext(UserContext)
    const killUser = index => setUsers(users.filter((user, i) => i !== index))

    return (
        <div>
            {
               users.map((user, i) => {
                   return(
                       <div key={i}>
                        {user.name} - <button onClick={() => killUser(i)}>X</button>
                       </div>
                   )
               }) 
            }
        </div>
    )
}