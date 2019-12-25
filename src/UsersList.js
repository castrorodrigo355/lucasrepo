import React, { useEffect, useContext } from 'react';
import { UserContext } from "./UserContext";
import UsersItem from "./UserItem";

export default function UsersList() {
    
    const { getUsers } = useContext(UserContext);
    
    useEffect(() => {
        async function getAllUsers(){
            await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(response => getUsers(response))
            .catch(error => console.log(error))
        }

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