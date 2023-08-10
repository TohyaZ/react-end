import React from "react";
import './login.styles.css';
import AuthBgImg from '../../assets/login-bg.jpg';
import Navbar from "../../componets/layouts/navbar/Navbar";
import AuthForm from "../../componets/form/authForm/AuthForm";
const Login = () => {
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
                        <h2>Login</h2>
                        <p>Signin with your email and password.</p>

                        <AuthForm  buttonName="Login"/>
                    </div>
                    </div>
                </div>
        </section>
        </React.Fragment>
    )
}

export default Login;