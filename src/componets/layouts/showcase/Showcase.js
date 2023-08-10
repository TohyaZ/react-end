import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../form/searchInputForm/SearchInputForm";

const ShowCase = () => {
    return(
        <section className="showcase-container">
            <Navbar darkTheme={ false } />
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>Best Books Available</h1>
                <p>The Strange Library With All The Books In This World</p>
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )   
}

export default ShowCase;