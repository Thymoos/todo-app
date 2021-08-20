import React from 'react';
import './AddTask.css'
import ThemeControl from './ThemeControl';
import TaskList from './TaskList';

const AddTask = () => {
    return ( 
        <div className="addTask">

            <ThemeControl/>

            <input className="checkbox" type="checkbox"  name="value" id="input"/>
            <label htmlFor="input"></label>
            <input id="text" type="text" spellCheck="false" maxLength="45" placeholder="Create a new todo..."/>

            <TaskList />
        </div>
     );
}
 
export default AddTask;