import React, { useContext} from 'react';
import {Checkbox} from 'primereact/checkbox';
import { UserContext } from "../context/UserContext";

export default function SelectOptions() {
    
    const { options, setSelectedOptions } = useContext(UserContext);

    const onOptionChange = e => {
        let selectedOptions = [...options];
        if(e.checked){
            selectedOptions.push(e.value);
        }else{
            selectedOptions.splice(selectedOptions.indexOf(e.value), 1);
        }
        setSelectedOptions(selectedOptions);
    }

    return(
        <div className="p-grid" style={{width:'250px', background:"gray", marginTop:"2rem"}}>
            <div className="p-col-12">
                <Checkbox inputId="cb1" value="todos" onChange={onOptionChange} checked={options.indexOf('todos') !== -1}></Checkbox>
                <label htmlFor="cb1" className="p-checkbox-label">Todos</label>
            </div>
            <div className="p-col-12">
                <Checkbox inputId="cb2" value="posts" onChange={onOptionChange} checked={options.indexOf('posts') !== -1}></Checkbox>
                <label htmlFor="cb2" className="p-checkbox-label">Posts</label>
            </div>
            <div className="p-col-12">
                <Checkbox inputId="cb3" value="albums" onChange={onOptionChange} checked={options.indexOf('albums') !== -1}></Checkbox>
                <label htmlFor="cb3" className="p-checkbox-label">Albums</label>
            </div>
        </div>
    )
}