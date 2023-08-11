import React, {useContext} from "react";
import './navbar.styles.css';
import { Link , useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import {ReactComponent as Cart} from '../../../assets/cart.svg'
import { getAuth , signOut } from "firebase/auth";
import app from '../../../firebase/Firebase';

const Navbar = ({ darkTheme , darkText}) => {

    const user = useContext(UserContext);
    const navigate = useNavigate();
    const auth = getAuth(app);

    const handleLogout = () => {
        signOut(auth).then(()=> {
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const showLoginAndSignUp = (
        <nav className="nav-links-container">
        <Link to="/" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Home</Link>
        <Link to="/books" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Books</Link>
        <Link to="/login" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Login in</Link>
        <Link to="/signup" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Sign up</Link>
    </nav>
    )

    const showLogoutAndCart = (
        <nav className="nav-links-container">
        <Link to="/" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Home</Link>
        <Link to="/books" className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Books</Link>
        <a onClick={handleLogout} className={`nav-links ${darkText ? 'nav-links-dark': 'nav-links'}`}>Logout</a>
        <Link to="/cart" className="cart-link"><Cart /></Link>
    </nav>
    )

    return(
        <section className={ `navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent' } `}>
            <div className="container flex justify-between align-center ">
                <a href="#" className="logo">Strange<span className="text-primary">Library</span></a>

                {user ? showLogoutAndCart : showLoginAndSignUp}
            </div>
        </section>
    )
}

export default Navbar;