import  React from 'react';
import { NavLink } from'react-router-dom';

const Header = () => {
    return(
    <header>
            <a href="#">Logo</a>
            <nav>
                <ul>
                <li><ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/home1">Home1</NavLink></li>
                    <li><NavLink to="/home2">Home2</NavLink></li>
                </ul></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
    </header>
)}
export default Header;