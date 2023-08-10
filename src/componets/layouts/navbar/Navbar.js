import React from "react";
import './navbar.styles.css';
import { Link } from "react-router-dom";

const Navbar = ({ darkTheme , darkText}) => {
    return(
        <section className={ `navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' } `}>
            <div className="container flex justify-between align-center ">
                <a href="#" className="logo">Strange<span className="text-primary">Library</span></a>
                <nav className="nav-links-container">
                    <Link to="/" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Home</Link>
                    <Link to="/books" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Books</Link>
                    <Link to="/login" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Login in</Link>
                    <Link to="/signup" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Sign up</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;