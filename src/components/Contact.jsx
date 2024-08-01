import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "15678ee0-53fd-40cf-894a-16f60dfbf919");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message</h3> <hr />
                <p>Feel free to reach out through contact form or find our contact information
                    below. Your feedback,questions, and suggestions are important to us as we
                    strive to provide exceptional service to our school community.
                </p>
                <ul>
                    <li><span className='contact-icon'><MdEmail /></span>brightstarboardingschool2055@gmail.com</li>
                    <li> <span className='contact-icon'><FaPhoneAlt /></span>099-590160</li>
                    <li> <span className='contact-icon'><FaLocationDot /></span>Belauri-04,Shantipur<br /> 10400,Nepal</li>
                </ul>

            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                    <label>Write Your Messages Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='btn'>Submit Now <FaArrowRightLong /></button>
                </form>
                <span className='status'>{result}</span>
            </div>
        </div>
    )
}

export default Contact