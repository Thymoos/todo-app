import React, {useState, useEffect} from 'react';
import './TaskList.css';

import deleteBtn from '../images/icon-cross.svg';

import FilterControl from './FilterControl';

// Drag and drop is explained here: https://www.w3schools.com/html/html5_draganddrop.asp

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
    const [activeTasks, setActiveTasks] = useState(tasks.filter(task => task.completed === false));
    const [completedTasks, setCompletedTasks] = useState(tasks.filter(task => task.completed === true));
    const [filterPosition, setFilterPosition] = useState(tasks);

    useEffect(() => {

        if(newTask !== ""){
        const newTaskObject = {
            id: tasks.length,
            text: newTask,
            completed: false
        }

        setTasks(prevTasks => [...prevTasks, newTaskObject])}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newTask]);

    const handleTaskCompletion = (e) => {
        const htmlForId = e.target.htmlFor;

        const newTodos = [...tasks];

        // eslint-disable-next-line eqeqeq
        const realIndex = newTodos.findIndex(task => task.id == htmlForId);
        
        newTodos[realIndex].completed = !newTodos[realIndex].completed; 

        setTasks(newTodos);
        setActiveTasks(tasks.filter(task => task.completed === false));
        setCompletedTasks(tasks.filter(task => task.completed === true));
    }

    const handleTaskDelete = (e) => {
        const taskId = e.target.id;
        
        const newTodos = [...tasks];

        newTodos.splice(taskId, 1);

        setTasks(newTodos);
        setActiveTasks(tasks.filter(task => task.completed === false));
        setCompletedTasks(tasks.filter(task => task.completed === true));
    }

    const clearCompletedTasks = () => {
        const completedTasks = tasks.filter(task => task.completed===true);
        const newTodos = [...tasks];

        for(var i = 0; i < completedTasks.length; i++){
            const id = completedTasks[i].id;

            const index = newTodos.findIndex((task, index) => {
                if (task.hasOwnProperty("id")){
                if (task.id === id) {return true}
                else return false;
           
            } else return false})
            newTodos.splice(index, 1);
        }

         setTasks(newTodos);
          setActiveTasks(tasks.filter(task => task.completed === false));
          setCompletedTasks(tasks.filter(task => task.completed === true));
    }

    const handleFilterChange = (e) => {
        const newPosition = e.target.id;

        if (newPosition === "all") setFilterPosition(tasks);
        else if (newPosition === "active") setFilterPosition(activeTasks);
        else setFilterPosition(completedTasks);
    }

    return ( 
        <div className="shadow-main">
        <div className="task-list">
            
            {filterPosition.map((task, index) => (
                <div className="task" key={task.id}>
                    <input type="checkbox" name="value" id={task.id} defaultChecked={task.completed ? true : false}/>
                    <label htmlFor={task.id} onClick={handleTaskCompletion}></label>
                    <p className={task.completed ? "completed" : ""}>{task.text}</p>
                    <img src={deleteBtn} alt="X" id={index} onClick={handleTaskDelete}/>
                </div>
            ))}

        </div>
        <FilterControl 
        activeTasks={tasks.filter(task => task.completed===false).length}
        clearCompletedTasks={clearCompletedTasks}
        handleFilterChange={handleFilterChange}
        />
        </div>
     );
}

export default TaskList;