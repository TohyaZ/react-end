import React from "react";
import './footer.styles.css'

const Footer = () => {
    return(
        <section className="footer-container">
            <div className="container">
                <h2>If you have any question feel free to ask here</h2>
                <form className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name:</label>
                        <input type="text" id="name" className="form-input" placeholder="Enter your name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" className="form-input" placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query</label>
                        <textarea className="form-input" placeholder="Type Here"></textarea>
                    </div>

                    <div className="form-group">
                        <a href="#" className="form-submit">Submit</a>
                    </div>
                </form>
                <p className="container-copy">&copy; 2023 StrangeLibary. Is Now Here</p>
            </div>
        </section>
    )
}

export default Footer;