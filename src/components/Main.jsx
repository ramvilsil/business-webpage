import React from "react";

import Stats from './Stats'

import CompanyImage from "../assets/pexels-pixabay-269077.jpg"

const Main = () => {
    return (
        <div id="home" className="main-page">
            <div class="main-container">
                <h1>Welcome. Learn about our work here.</h1>

                <img src={CompanyImage} alt="Company" />
            </div>
            <Stats />

        </div>
    )
}

export default Main