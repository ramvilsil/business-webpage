import React from "react";



const Navbar = () => {
    return (
        <>
            
            <div className="navbar">

                <div className="nav-left">Business</div>

                {/* Navigation Links */}
                <ul>

                    <li className="navbar-links"><a href="#home">Home</a></li>
                    <li className="navbar-links"><a href="#about">About</a></li>
                    <li className="navbar-links"><a href="#contact">Contact</a></li>

                    {/* Hamburger Icon for mobile screens*/}
                    <a class="toggle-button">

                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>

                    </a>

                </ul>

            </div>

        </>
    )
}


export default Navbar