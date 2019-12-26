import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import { ToggleButton } from 'primereact/togglebutton';
import "../App.css";

export default function UserNav() {

    const { checked, toogleChecked } = useContext(UserContext);
    const changeToogle = e => toogleChecked(e.value);
    
    return (
        <UserContext.Consumer>
            {
                value => {
                    return(
                        <div>
                            {
                                !checked ? 
                                <div id="myNav" style={{background:"white"}}>
                                    {"Users Quantity: " + value.users.length}
                                    <ToggleButton checked={checked} onChange={changeToogle}/>
                                </div>
                                :
                                <div id="myNav" style={{background:"black"}}>
                                    {"Users Quantity: " + value.users.length}
                                    <ToggleButton checked={checked} onChange={changeToogle}/>
                                </div>
                            }
                            <hr/>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}