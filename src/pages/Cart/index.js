import React, { useContext } from "react";
import { PicSomeContext } from "../../context/PicSomeContext";
import ImageComp from "../../components/ImageComp";
import "./index.css";
import { EmptyCart } from "../../components/EmptyCart";
import CartImageComp from "../../components/CartImageComp";
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

  console.log("CARTITEMS", cartItems);
  if (cartItems.length > 0) {
    return (
      <div>
        <h1>CART</h1>
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
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
