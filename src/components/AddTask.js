import React from 'react';
import './AddTask.css'

const AddTask = () => {
    return ( 
        <div className="addTask">
            <input className="checkbox" type="checkbox" name="value" id="input" />
            <label htmlFor="input"></label>
            <input id="text" type="text" spellCheck="false" placeholder="Create a new todo..."/>
        </div>
     );
}
 
export default AddTask;