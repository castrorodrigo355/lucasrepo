import React, { useEffect, useContext } from 'react';
import { UserContext } from "../context/UserContext";
import UsersItem from "./UserItem";

export default function UsersList() {
    
    const { getUsers } = useContext(UserContext);
    
    useEffect(() => {
        async function getAllUsers(){ await getUsers() }
        getAllUsers();
    }, []);

    return(
        <UserContext.Consumer>
            {
                value => {
                    return(
                        <div>
                            {
                                value.users.map((user, i) => {
                                    return(
                                        <div key={i}>
                                            <UsersItem user={user}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}