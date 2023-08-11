import React from "react";
import Navbar from "../../componets/layouts/navbar/Navbar";
import Footer from "../../componets/layouts/footer/Footer";
import CartItemsContainer from "../../componets/layouts/cart-items-container/CartItemsContainer";


const CartPage = () => {
    return (
        <section>
            <Navbar darkTheme={true}/>

            <CartItemsContainer />

            <Footer />
        </section>
    )
}

export default CartPage;