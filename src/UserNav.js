import React, { useContext } from 'react';
import { UserContext } from "./UserContext";

export default function UserNav() {
    const [users, setUsers] = useContext(UserContext)

    return (
        <div style={{width:"100%", height:"40px" , color:"white", backgroundColor:"black"}}>
            <p>Users Quantity: { users.length }</p>
        </div>
    )
}