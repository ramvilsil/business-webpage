import React from "react";


const ContactForm = () => {
    return (
        <>

            <div className="contact-form">

                {/* Title */}
                <h1>Contact Us</h1>

                {/* Form */}
                <form>

                    <label for="fname">Name:</label>

                    <input className="input" type="text" placeholder="Name"></input>
                    
                    <label for="fname">Email:</label>

                    <input className="input" type="text" placeholder="Email"></input>
                    
                    <label for="fname">Number:</label>

                    <input className="input" type="text" placeholder="Number"></input>
                    <input className="submit-button" type="submit" value="Submit"></input>

                </form>

            </div>

        </>
    )
}


export default ContactForm