import React, { useState, useContext} from 'react';
import {Checkbox} from 'primereact/checkbox';
import { UserContext } from "./UserContext";

export default function SelectCities() {
    
    const { cities, setSelectedCities } = useContext(UserContext);

    const onCityChange = e => {
        let selectedCities = [...cities];
        if(e.checked){
            selectedCities.push(e.value);
        }else{
            selectedCities.splice(selectedCities.indexOf(e.value), 1);
        }
        setSelectedCities(selectedCities);
    }

    return(
        <div className="p-grid" style={{width:'250px', background:"gray", marginTop:"2rem"}}>
            <div className="p-col-12">
                <Checkbox inputId="cb1" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1}></Checkbox>
                <label htmlFor="cb1" className="p-checkbox-label">New York</label>
            </div>
            <div className="p-col-12">
                <Checkbox inputId="cb2" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1}></Checkbox>
                <label htmlFor="cb2" className="p-checkbox-label">San Francisco</label>
            </div>
            <div className="p-col-12">
                <Checkbox inputId="cb3" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1}></Checkbox>
                <label htmlFor="cb3" className="p-checkbox-label">Los Angeles</label>
            </div>
        </div>
    )
}