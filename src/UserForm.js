import React, { useState } from 'react';
import { UserContext } from "./UserContext";

export default function UserForm() {
    const [user, setUser] = useState({name: "", course: ""})
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    return(
        <UserContext.Consumer>
            {
                value => {
                    return(
                        <form onSubmit={ e => {e.preventDefault(); value.addUser(user)}}>
                            <input type="text" name="name" value={user.name} onChange={onChange}/>
                            <input type="text" name="course" value={user.course} onChange={onChange}/>
                            <button type="submit">Add User</button>
                        </form>
                    )
                }
            }
        </UserContext.Consumer>
    )
}