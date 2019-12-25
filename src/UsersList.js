import React from 'react';
import { UserContext } from "./UserContext"

export default function UsersList() {
    
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
    {user.name} - {user.course} - <button type="button" onClick={() => value.deleteUser(i)}>X</button>
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