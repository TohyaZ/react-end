import React , { useState ,useEffect , useContext} from "react";
import './detailsection.styles.css'
import { useParams , useNavigate } from "react-router-dom";
import { BookData } from "../../../util/BookData";
import { CartContext, UserContext } from "../../../App";

const DetailSection = () => {
    const {id} = useParams();
    const [bookData , setBookData] = useState({});

    const user = useContext(UserContext);
    const {cartItems , setCartItems} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect (()=>{
        let newData = BookData.filter((book)=> book.id === parseInt(id))
        setBookData(newData[0])
    },[])


    const handleAddToCart =() => {
        if(user) {
            setCartItems([...cartItems, bookData]);
            alert(`Đã thêm ${bookData.book_name} vào giỏ hàng`)
        }else {
            navigate('/login')
            alert('Vui lòng đăng nhập trước khi thanh toán')
        }
    }

    return(
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="book-img-container">
                        <img src={bookData.book_url} alt="book"/>
                    </div>

                    <div className="book-detail-container">
                        <h2>{bookData.book_name}</h2>
                        <p className="text-primary">{bookData.author_name}</p>
                        <p className="book-description">{bookData.book_description}</p>
                        <p><b>Language:</b> {bookData.language}</p>
                        <p><b>Book Lenght:</b> {bookData.print_length}</p>
                        <h3>&#165;{bookData.price}</h3>

                        <a onClick={handleAddToCart} className="button-primary">Add to cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection;

