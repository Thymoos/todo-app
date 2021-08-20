import React, {useState, useEffect} from 'react';
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
        completed: true
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

const TaskList = ({newTask}) => {

    const [tasks, setTasks] = useState(defaultTaskList);

    useEffect(() => {

        if(newTask !== ""){
        const newTaskObject = {
            id: tasks.length,
            text: newTask,
            completed: false
        }

        setTasks(prevTasks => [...prevTasks, newTaskObject])}
    }, [newTask]);

    const handleTaskCompletion = (e) => {
        const htmlForId = e.target.htmlFor;

        const newTodos = [...tasks];
        
        newTodos[htmlForId].completed = !newTodos[htmlForId].completed; 

        setTasks(newTodos);
    }

    const handleTaskDelete = (e) => {
        const taskId = e.target.id;
        
        const newTodos = [...tasks];

        newTodos.splice(taskId, 1);

        setTasks(newTodos);
    }

    return ( 
        <div className="shadow-main">
        <div className="task-list">
            
            {tasks.map((task, index) => (
                <div className="task" key={task.id}><input type="checkbox" name="value" id={task.id} checked={task.completed ? true : false}/><label htmlFor={task.id} onClick={handleTaskCompletion}></label><p className={task.completed ? "completed" : ""}>{task.text}</p><img src={deleteBtn} alt="X" id={index} onClick={handleTaskDelete}/></div>
            ))}

        </div>
        <FilterControl 
        activeTasks={tasks.filter(task => task.completed===false).length}
        />
        </div>
     );
}

// Labels are needed for checkboxes to work

export default TaskList;