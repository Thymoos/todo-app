import React from 'react';
import './ThemeControl.css';

import sunThemeIcon from '../images/icon-sun.svg';

const ThemeControl = () => {
    return ( 
        <div className="title-wrapper">
            <h1>TODO</h1>
            <button><img src={sunThemeIcon} alt="Theme icon" /></button> 
        </div>
     );
}
 
export default ThemeControl;