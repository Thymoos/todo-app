import React from 'react';
import './FilterControl.css';

const FilterControl = ({activeTasks}) => {

    return ( 
        <div className="filter-wrapper">
            <p>{activeTasks} items left</p>
            <div className="filter-options">

                <input type="radio" name="filter-group" id="all" defaultChecked/><label htmlFor="all">All</label>
                <input type="radio" name="filter-group" id="active"/><label htmlFor="active">Active</label>
                <input type="radio" name="filter-group" id="completed"/><label htmlFor="completed">Completed</label>

            </div>
            <p>Clear completed</p>
        </div>
     );
}
 
export default FilterControl;