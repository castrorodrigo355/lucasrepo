import React, { useContext } from 'react';
import { UserContext } from "./UserContext";

export default function UserSqlQuery() {
    
    const { cities } = useContext(UserContext);

    return(
        <div>
            {
                cities.map((city, i) => {
                    return(
                        <div key={i}>
                            {city}
                        </div>
                    )
                })
            }
        </div>
    )
}