import React, {useState} from 'react';
import './TaskList.css';

import deleteBtn from '../images/icon-cross.svg';

import FilterControl from './FilterControl';

const defaultTaskList = [
    {
        id: 0,
        text: "Do the laundry",
        completed: false
    },
    {
        id: 1,
        text: "Finish todo-app",
        completed: false
    },
    {
        id: 2,
        text: "Try to look good",
        completed: false
    },
    {
        id: 3,
        text: "Woo some girls",
        completed: false
    },
    {
        id: 4,
        text: "Order pizza",
        completed: false
    },
    {
        id: 5,
        text: "Check mail",
        completed: false
    }
];

const TaskList = () => {

    const [tasks, setTasks] = useState(defaultTaskList);

    const handleTaskCompletion = (e) => {
        const htmlForId = e.target.htmlFor;

        const newTodos = [...tasks];
        
        newTodos[htmlForId].completed = !newTodos[htmlForId].completed; 

        setTasks(newTodos);
    }

    return ( 
        <div className="shadow-main">
        <div className="task-list">
            
            {tasks.map((task) => (
                <div className="task" key={task.id}><input type="checkbox" name="value" id={task.id} /><label htmlFor={task.id} onClick={handleTaskCompletion}></label><p className={task.completed ? "completed" : ""}>{task.text}</p><img src={deleteBtn} alt="X" /></div>
            ))}

        </div>
        <FilterControl/>
        </div>
     );
}

// Labels are needed for checkboxes to work

export default TaskList;