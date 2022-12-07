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

                    <label for="">NAME</label>

                    <input className="input" type="text" ></input>
                    
                    <label for="">EMAIL</label>

                    <input className="input" type="text"></input>
                    
                    <label for="">PHONE NUMBER</label>

                    <input className="input" type="text"></input>

                    <label for="">MESSAGE</label>

                    <textarea className="messageInput" type="text"></textarea>

                    <input className="submit-button" type="submit" value="Submit"></input>

                </form>

            </div>

        </>
    )
}


export default ContactForm