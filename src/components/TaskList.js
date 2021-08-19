import React, {useState} from 'react';
import './TaskList.css';

import deleteBtn from '../images/icon-cross.svg';

import FilterControl from './FilterControl';

const defaultTaskList = [
    {
        id: 0,
        text: "Do the laundry",
        completed: true
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
        completed: true
    }
];

const TaskList = () => {

    const [tasks, setTasks] = useState(defaultTaskList);

    return ( 
        <div className="shadow-main">
        <div className="task-list">
            
            {tasks.map((task, index) => (
                <div className="task"><input type="checkbox" name="value" id={index} /><label htmlFor={index}></label><p>{task.text}</p><img src={deleteBtn} alt="X" /></div>
            ))}

        </div>
        <FilterControl/>
        </div>
     );
}

// Labels are needed for checkboxes to work

export default TaskList;