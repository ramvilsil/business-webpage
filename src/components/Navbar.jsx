import './Navbar.modules.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from "react";


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <>

            <div className="navbar">

                <div className="nav-left">Business.</div>

                {!nav ?
                    <ul>

                        <li className="navbar-links"><a href="#home">Home</a></li>
                        <li className="navbar-links"><a href="#about">About</a></li>
                        <li className="navbar-links"><a href="#contact">Contact</a></li>

                        <a class="toggle-button" onClick={handleClick}>

                            <FaBars size={100} />

                        </a>

                    </ul>
                    : <>

                        <div className='mobile-menu'>

                            <a class="toggle-button" onClick={handleClick}>

                                <FaTimes size={100} />

                            </a>
                            <ul>


                                <li ><a href="#home" onClick={handleClick}>Home</a></li>
                                <li><a href="#about" onClick={handleClick}>About</a></li>
                                <li><a href="#contact" onClick={handleClick}>Contact</a></li>
                            </ul>



                        </div>

                    </>}

            </div>

        </>
    )
}


export default Navbar