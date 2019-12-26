import React, { useEffect, useContext } from 'react';
import { UserContext } from "../context/UserContext";

export default function UserSqlQuery() {
    
    const { options } = useContext(UserContext);

    useEffect(() => {
        options.map((option, i) => {
            fetch(`https://jsonplaceholder.typicode.com/${option}`)
                .then(res => res.json())
                .then(response => console.log(response))
                .catch(error => console.log(error))  
        })
    }, [options])

    return(
        <div>
            {
                options.map((option, i) => {
                    return(
                        <div key={i}>
                            {option}
                        </div>
                    )
                })
            }
        </div>
    )
}