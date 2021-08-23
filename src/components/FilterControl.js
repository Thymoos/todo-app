import React from 'react';
import './FilterControl.css';

const FilterControl = ({activeTasks, clearCompletedTasks, handleFilterChange}) => {

    return ( 
        <div className="filter-wrapper">
            <p>{activeTasks} items left</p>
            <div className="filter-options">

                <input type="radio" name="filter-group" id="all" defaultChecked onClick={handleFilterChange}/><label htmlFor="all">All</label>
                <input type="radio" name="filter-group" id="active" onClick={handleFilterChange}/><label htmlFor="active">Active</label>
                <input type="radio" name="filter-group" id="completed" onClick={handleFilterChange}/><label htmlFor="completed">Completed</label>

            </div>
            <p onClick={clearCompletedTasks}>Clear completed</p>
        </div>
     );
}
 
export default FilterControl;