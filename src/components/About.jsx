import React from "react";
import TeamImage from "../assets/pexels-fauxels-3183172.jpg"
import './About.css'

const About = () => {
    return (
        <>

            {/* 2 columns on bigger screens, no columns 2 rows on smaller */}
            <div id='about' className="about">
                
                <div className="about-container">
                    
                    <img src={TeamImage} alt="Company" />

                    
                    <div className="about-text">

                        <h1>About Us</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.</p>

                    </div>
                </div>
            </div>

        </>
    )
}


export default About;