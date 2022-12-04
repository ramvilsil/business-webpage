import React from "react";
import './ContactForm.css'

const ContactForm = () => {
    return (
        <>

            <div className="contact-form">

                {/* Title */}
                <h1>Contact Us</h1>

                <p>We'll respond as soon as possible!</p>

                {/* Form */}
                <form>

                    <label for="fname">NAME</label>

                    <input className="input" type="text" ></input>
                    
                    <label for="fname">EMAIL</label>

                    <input className="input" type="text"></input>
                    
                    <label for="fname">NUMBER</label>

                    <input className="input" type="text"></input>
                    <input className="submit-button" type="submit" value="Submit"></input>

                </form>

            </div>

        </>
    )
}


export default ContactForm