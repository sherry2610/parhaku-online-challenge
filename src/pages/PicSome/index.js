import React, { useState, useContext } from "react";
import { PicSomeContext } from "../../context/PicSomeContext";
import ImageComp from "../../components/ImageComp";
import { Row, Col } from "react-bootstrap";


import "./index.css";

function PicSome() {
  const [hovered, setHovered] = useState(false);

  const { imgData, setImgData, setCartItems } = useContext(PicSomeContext);
  // console.log("++++++", imgData);

const toggleFunction = (id) => {
  const updatedData = imgData.map(img=>{
    return img.id===id?(
       {
      ...img,
      isFavorite : !img.isFavorite
      }
    ) : (
      img
    )
  })
  setImgData(updatedData)
  console.log("toggledImage",updatedData)
}
 
const toggleCart = (id) => {
  const updatedData = imgData.map(img=>{
    return img.id===id?(
       {
      ...img,
      inCart : !img.inCart
      }
    ) : (
      img
    )
  })
  setImgData(updatedData)
  setCartItems(updatedData.filter(d=>d.inCart))
  console.log("toggledImage",updatedData)
}
  return (
    <Row>
      {imgData.map((image, i) => (
        // <div className="imgContainer">
          <ImageComp
            // url={image.url}
            // isFav={image.isFavorite}
            // id={image.id}
            image={image}
            key={i}
            toggleFav={toggleFunction}
            toggleCart={toggleCart}
          />
        // </div>
      ))}
    </Row>
  );
}

export default PicSome;
