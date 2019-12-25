import React from 'react';
import { UserContext } from "./UserContext";
import "./App.css";

export default function UserNav() {
    
    return (
        <UserContext.Consumer>
            {
                value => {
                    return(
                        <div>
                            {"Users Quantity: " + value.users.length}
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}