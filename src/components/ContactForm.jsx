import React from "react";

const ContactForm = () => {
    return (
        <div>
            <div className="contact-form">

                <h1>Contact</h1>
                <form>
                    <label for="fname">Name:</label>
                    <input type="text" placeholder="Name"></input>
                    <label for="fname">Email:</label>
                    <input type="text" placeholder="Email"></input>
                    <label for="fname">Number:</label>
                    <input type="text" placeholder="Number"></input>
                    <input type="submit" value="Submit"></input>
                </form>

            </div>
        </div>
    )
}

export default ContactForm