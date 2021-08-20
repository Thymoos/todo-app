import React, {useState} from 'react';
import './AddTask.css'
import ThemeControl from './ThemeControl';
import TaskList from './TaskList';

const AddTask = () => {

    const [newTask, setNewTask] = useState("");

    const handleNewTask = () => {

        const newTaskText = document.getElementById("text").value;

        setNewTask(newTaskText);

        document.getElementById("text").value = "";

        setTimeout(() => {
            document.getElementById("input").checked = false;
        }, 1500);
    }

    return ( 
        <>
        <div className="addTask">

            <ThemeControl/>

            <input className="checkbox" type="checkbox"  name="value" id="input"/>
            <label htmlFor="input" onClick={handleNewTask}></label>
            <input id="text" type="text" spellCheck="false" maxLength="45" placeholder="Create a new todo..."/>

        </div>

        <TaskList newTask={newTask}/>

        </>
     );
}
 
export default AddTask;