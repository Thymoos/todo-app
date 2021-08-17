import React from 'react';
import './FilterControl.css';

const FilterControl = () => {
    return ( 
        <div className="filter-wrapper">
            <p>5 items left</p>
            <div className="filter-options">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <p>Clear completed</p>
        </div>
     );
}
 
export default FilterControl;