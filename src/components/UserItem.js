import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

export default function UsersItem({ user }) {

    const { deleteUser, getUser } = useContext(UserContext);
    const deleteUserItem = index => deleteUser(index);
    const getInfoUser = user => getUser(user);

    return(
        <div>
            {user.id} - 
            {user.name} - 
            <button type="button" onClick={() => deleteUserItem(user.id)}>Delete</button> -
            <button type="button" onClick={() => getInfoUser(user)}>Info</button>
        </div>
    )
}