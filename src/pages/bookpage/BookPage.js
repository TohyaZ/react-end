import React from "react";
import './bookpage.styles.css'
import Navbar from "../../componets/layouts/navbar/Navbar";
import SearchInputForm from "../../componets/form/searchInputForm/SearchInputForm";
import ProductListingAll from "../../componets/layouts/product-listing-all/ProductListingAll";
import Footer from "../../componets/layouts/footer/Footer";


const BookPage = () =>{
    return(
        <section>
            <Navbar darkTheme={true} />

            <div className="search-container">
                <h2>Find The Book You Want To Look Here</h2>
                <SearchInputForm darkTheme={false} />
            </div>
            
            <ProductListingAll />
            <Footer />
        </section>
    )
}

export default BookPage;