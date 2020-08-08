import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ImageComp from "../../components/ImageComp";
import { Row, Col } from "react-bootstrap";


import "./index.css";

function PicSome() {
  const [hovered, setHovered] = useState(false);

  const { imgData, setImgData } = useContext(UserContext);
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

    // if(img.id===id){
    //   console.log("before",img)
    //   return !img.isFavorite;
    //   console.log("After",img)
    //   return img
    // }
  })
  setImgData(updatedData)
  console.log("toggledImage",updatedData)
}
 

  return (
    <Row>
      {imgData.map((image, i) => (
        // <div className="imgContainer">
          <ImageComp
            url={image.url}
            isFav={image.isFavorite}
            id={image.id}
            key={i}
            toggleFav={toggleFunction}
          />
        // </div>
      ))}
    </Row>
  );
}

export default PicSome;
