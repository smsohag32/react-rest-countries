import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            {toggle && (
                <p className='text-blue-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cum praesentium culpa eius quibusdam quo labore natus corrupti! Facere, placeat. Sed ab vitae cumque tempore! Expedita harum voluptatum eaque libero?
                </p>
            )
            }
            <button onClick={() => { setToggle(!toggle) }}>{toggle ? 'hide' : 'show'}</button>
        </div>
    );
};

export default Footer;