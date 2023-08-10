import React from "react";
import './productlisting.styles.css'
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../util/BookData";
const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
            <h2>Here are some books that you may like</h2>

            <div className="listing-container">
                {BookData.slice(0,4).map((book) => (
                    <ProductListingCard bookData={book} />
                ))}
            </div>
            </div>
        </div>
    )
}

export default ProductListing;