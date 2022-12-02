import React from "react";
import Stats from './Stats'
import CompanyImage from "../assets/pexels-pixabay-269077.jpg"


const Main = () => {
    return (
        <div id="home" className="main-page">

            <div class="main-container">

                <h1>A Different Kind Of Company.<br></br>A Different Kind Of Computer.</h1>

                <img src={CompanyImage} alt="Company" />

            </div>

            {/*Stats component*/}
            <Stats />

        </div>
    )
}


export default Main