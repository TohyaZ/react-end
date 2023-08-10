import React from "react";
import ShowCase from "../../componets/layouts/showcase/Showcase";
import ProductListing from "../../componets/layouts/product-listing/ProductListing";
import Footer from "../../componets/layouts/footer/Footer";

const HomePage = () =>{
    return(
        <section>
            <ShowCase />
            <ProductListing />
            <Footer />
        </section>
    )
}

export default HomePage;