import React from 'react';
import './TaskList.css';

import deleteBtn from '../images/icon-cross.svg';

import FilterControl from './FilterControl';

const TaskList = () => {
    return ( 
        <div className="shadow-main">
        <div className="task-list">
            <div className="task"><input type="checkbox" name="value" id="1" /><label htmlFor="1"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="2" /><label htmlFor="2"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="3" /><label htmlFor="3"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="4" /><label htmlFor="4"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="5" /><label htmlFor="5"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="6" /><label htmlFor="6"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="7" /><label htmlFor="7"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>
            <div className="task"><input type="checkbox" name="value" id="8" /><label htmlFor="8"></label><p>Complete online JavaScript course</p><img src={deleteBtn} alt="X" /></div>

        </div>
        <FilterControl/>
        </div>
     );
}

// Labels are needed for checkboxes to work

export default TaskList;