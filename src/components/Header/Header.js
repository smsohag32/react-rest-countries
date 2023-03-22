import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='headerContainer'>
            <div>
                <h1>Info your Destination</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/blog">Blogs</a></li>
                    <li><a href="/update">Update</a></li>
                    <li><a href="/countries">Countries</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;