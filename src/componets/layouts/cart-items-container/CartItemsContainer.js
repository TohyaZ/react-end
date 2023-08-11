import React, {useContext} from "react";
import './cart-items-container.styles.css'
import CartItemCard from "../../cards/cart-item-card/CartItemCard";
import { CartContext } from "../../../App";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const CartItemsContainer = () => {
    const {cartItems , totalAmount} = useContext(CartContext);
    const stripeKey = 'pk_test_51NdqheATI2iP4E97jwYgkHEpy4byfdNyg6FVXXP9tINapSebJqhG72wvltwg2GGElDAHb8TKI7QOisdXYxbPdEZs00jXIHidNL'
    const navigate = useNavigate();

    const onToken = (token) =>{
        console.log(token)
        alert('Hóa Đơn của bạn đã được thanh toán xin cảm ơn')
        navigate('/books')
    }

    return(
        <section className="cart-items-container">
            <div className="container">
                {totalAmount === 0 ? (
                    <h2 className="cart-title">Currently your cart is empty</h2>
                ):(
                    <React.Fragment>
                        <h2 className="cart-title">Cart</h2>

                        {cartItems.map((item)=> (
                            <CartItemCard key={item.id} bookData={item} />
                        ))}

                        <h2 className="cart-title">Total Amount = &#165;{totalAmount}</h2>

                        
                        <StripeCheckout 
                            name="Book Checkout"
                            description="Please fill in the details below"
                            amount={totalAmount}
                            currency="JPY"
                            stripeKey={stripeKey}
                            token={onToken}
                            billingAddress
                        > 
                        <button className="button-primary">Checkout</button>
                        </StripeCheckout>
                    </React.Fragment>
                )}
            </div>
        </section>
    )
}

export default CartItemsContainer;