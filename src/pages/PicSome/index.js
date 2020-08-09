import React, { useContext } from "react";
import { PicSomeContext } from "../../context/PicSomeContext";
import ImageComp from "../../components/ImageComp";
import { Row } from "react-bootstrap";

import "./index.css";

function PicSome() {
  const { imgData, setImgData, setCartItems } = useContext(PicSomeContext);

  const toggleFunction = (id) => {
    const updatedData = imgData.map((img) => {
      return img.id === id
        ? {
            ...img,
            isFavorite: !img.isFavorite,
          }
        : img;
    });
    setImgData(updatedData);
    console.log("isFavorite toggled!");
  };

  const toggleCart = (id) => {
    const updatedData = imgData.map((img) => {
      return img.id === id
        ? {
            ...img,
            inCart: !img.inCart,
          }
        : img;
    });
    setImgData(updatedData);
    setCartItems(updatedData.filter((d) => d.inCart));
    console.log("inCart toggled!");
  };
  return (
    <Row>
      {imgData.map((image, i) => (
        <ImageComp
          image={image}
          key={i}
          toggleFav={toggleFunction}
          toggleCart={toggleCart}
        />
      ))}
    </Row>
  );
}

export default PicSome;
