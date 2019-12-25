import React, { useState, useContext } from 'react';
import { UserContext } from "./UserContext";

export default function UserForm() {
    const [users, setUsers] = useContext(UserContext)
    const [user, setUser] = useState({name: "", course: ""})
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    const addUser = e => {
        e.preventDefault();
        setUsers([...users, user]);
        setUser({name: "", course: ""})
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <input type="text" name="name" value={user.name} onChange={onChange}/>
                <input type="text" name="course" value={user.course} onChange={onChange}/>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}