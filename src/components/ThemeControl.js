import React, {useState} from 'react';
import './ThemeControl.css';

import sunThemeIcon from '../images/icon-sun.svg';
import moonThemeIcon from '../images/icon-moon.svg';

const ThemeControl = () => {

    const [theme, setTheme] = useState(false);

    const handleThemeChange = () => {
        const body = document.body;
        
        body.className = "";
        
        if (theme === false) {
            body.className = "light-theme";
            setTheme(true);
        }
        else {
            body.className = "dark-theme";
            setTheme(false);
        }
    }

    return ( 
        <div className="title-wrapper">
            <h1>TODO</h1>
            <button>
                <img src={theme ? moonThemeIcon : sunThemeIcon} alt="Theme icon" 
                onClick={handleThemeChange}
            /></button> 
        </div>
     );
}
 
export default ThemeControl;