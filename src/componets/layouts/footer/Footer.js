import React, {useRef} from "react";
import './footer.styles.css'
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const serviceId = "service_8nkce8a";
    const templateId = "template_i4cptoo";
    const publicKey = "Uh6qAfeH4vzo6Ve29";

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId , templateId , form.current ,publicKey )
        .then((response) =>{
            console.log(response.text)
        })
        .catch((error) => {
            console.log(error.text)
        })

        e.target.reset();
    }

    return(
        <section className="footer-container">
            <div className="container">
                <h2>If you have any question feel free to ask here</h2>

                <form onSubmit={handleSubmit} ref={form} className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name:</label>
                        <input type="text" name="user_name" id="name" className="form-input" placeholder="Enter your name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" name="user_email" id="email" className="form-input" placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query</label>
                        <textarea className="form-input" name="message" placeholder="Type Here"></textarea>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="form-submit" />
                    </div>
                </form>
                <p className="container-copy">&copy; 2023 StrangeLibary. Is Now Here</p>
            </div>
        </section>
    )
}

export default Footer;