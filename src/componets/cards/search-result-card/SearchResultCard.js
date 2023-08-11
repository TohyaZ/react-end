import React, {useContext} from "react";
import './searchresultcard.styles.css';
import { Link } from "react-router-dom";

const SearchResultCard = ({bookData}) => {
    return(
            <section className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
                </div>
                <div className="cart-item-content-container">
                    <h2>{bookData.book_name}</h2>
                    <p>{bookData.author_name}</p>
                    <h3 className="cart-item-price">&#165;{bookData.price}</h3>
                    <Link to={`/books-details/${bookData.id}`} className="button-primary search-btn">Chi tiết sản phẩm</Link>
                </div>
            </section>
    )
}

export default SearchResultCard;