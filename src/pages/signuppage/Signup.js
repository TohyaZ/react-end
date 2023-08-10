import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/login-bg.jpg';
import Navbar from "../../componets/layouts/navbar/Navbar";
import AuthForm from "../../componets/form/authForm/AuthForm";
const SignUp = () => {
    return(
        <React.Fragment>
            <Navbar darkText={true}/>
        <section className="signup-container">
                <div className="signup-img-container">
                    <img src={AuthBgImg} />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                        <h2>SignUp</h2>
                        <p>Create a new account with email and password.</p>

                        <AuthForm buttonName="Sign Up"/>
                    </div>
                    </div>
                </div>
        </section>
        </React.Fragment>
    )
}

export default SignUp;