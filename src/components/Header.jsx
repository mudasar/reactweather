import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
    return(
        <div>
            <nav>
                <h3>Reactive Weather</h3>
                <ul className="topnav">
                    <li><NavLink to="/" exact>Weather</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="clearfx"></div>
            
            {props.children}
        </div>
    )
}

export default Header;