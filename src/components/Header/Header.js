import React from 'react';
import './Header.css'
import {
    Link
} from "react-router-dom";

function Header() {
    return (
       
            <div className="topnav">
                <ul className="nav">
                    <li><Link className='nav_item' to="/top">Top</Link></li>
                    <li><Link className='nav_item' to="/headline">Headline</Link></li>
                    <li><Link className='nav_item' to="/search">Search</Link></li>

                </ul>
            </div>
       
    );
}

export default Header;
