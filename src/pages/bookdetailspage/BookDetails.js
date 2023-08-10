import React from "react";
import Navbar from "../../componets/layouts/navbar/Navbar";
import DetailSection from "../../componets/layouts/details-section/DetailSection";
import Footer from "../../componets/layouts/footer/Footer";


const BookDetailsPage = () =>{
    return(
        <section>
            <Navbar darkTheme={true} />

            <DetailSection />
            <Footer />
        </section>
    )
}

export default BookDetailsPage; 