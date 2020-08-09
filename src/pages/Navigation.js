import React, { useContext, useState } from "react";
import { PicSomeContext } from "../context/PicSomeContext";
import { Link } from "react-router-dom";
import { Nav, Button, Spinner } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../App.css";

function Navigation() {
  const { imgData, setImgData, setCartItems, cartItems } = useContext(
    PicSomeContext
  );

  const [loading, setLoading] = useState(false);

  const orderPlaced = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCartItems([]);
      const newData = imgData.map((img) => {
        return {
          ...img,
          inCart: false,
        };
      });
      setImgData(newData);
      console.log("Order Placed!");
    }, 3000);
  };

  const cartIcon =
    cartItems.length === 0 ? (
      <ShoppingCartOutlinedIcon className="icon" />
    ) : (
      <ShoppingCartIcon className="icon" />
    );

  return (
    <div className="nav-header">
      <Nav>
        <Link to="/" style={{ position: "relative", left: "50px" }}>
          Pic Some
        </Link>

        <Link to="/cart" style={{ position: "relative", left: "80%" }}>
          {cartIcon}
        </Link>

        {cartItems.length > 0 && (
          <Button
            style={{ position: "relative", left: "60%" }}
            onClick={() => {
              orderPlaced();
            }}
          >
            {loading ? "Ordering...." : "Place Order!"}
          </Button>
        )}
        {loading && (
          <Spinner
            style={{ position: "relative", left: "30%" }}
            animation="border"
            variant="primary"
          />
        )}
      </Nav>
    </div>
  );
}

export default Navigation;
