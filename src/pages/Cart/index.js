import React, { useContext } from "react";
import { PicSomeContext } from "../../context/PicSomeContext";
import ImageComp from "../../components/ImageComp";
import './index.css'
import { EmptyCart } from "../../components/EmptyCart";
import CartImageComp from "../../components/CartImageComp";
function Cart() {
  const { cartItems, setCartItems } = useContext(PicSomeContext);
  console.log("CARTITEMS", cartItems);
  if (cartItems.length > 0) {
    return (
      <div>
        <h1>CART</h1>
        {cartItems.map((image,i) => (
          <CartImageComp
            image={image}
            serialNum={i}
            />
        ))}
      </div>
    );
  }else{
   return <EmptyCart />
  }
}

export default Cart;
