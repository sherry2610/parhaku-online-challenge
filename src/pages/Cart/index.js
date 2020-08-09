import React, { useContext } from "react";
import { PicSomeContext } from "../../context/PicSomeContext";
import CartImageComp from "../../components/CartImageComp";
import { EmptyCart } from "../../components/EmptyCart";
import "./index.css";

function Cart() {
  const { imgData, setImgData, cartItems, setCartItems } = useContext(
    PicSomeContext
  );

  const deleteItem = (id) => {
    const updatedImgData = imgData.map((img) => {
      return img.id === id
        ? {
            ...img,
            inCart: false,
          }
        : img;
    });
    const updatedCartData = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartData);
    setImgData(updatedImgData);
  };

  if (cartItems.length > 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>CART</h1>
        {cartItems.map(
          (image, i) =>
            image.inCart && (
              <CartImageComp
                image={image}
                serialNum={i}
                deleteItem={deleteItem}
              />
            )
        )}
        <div className="total-div">
          <span>TOTAL :</span>
          <span>
            {(cartItems.length * 5.99).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
          <br />
        </div>
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;