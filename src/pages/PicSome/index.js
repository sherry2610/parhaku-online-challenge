import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ImageComp from "../../components/ImageComp";
import { Row, Col } from "react-bootstrap";


import "./index.css";

function PicSome() {
  const [hovered, setHovered] = useState(false);

  const { imgData, setImgData } = useContext(UserContext);
  // console.log("++++++", imgData);


 

  return (
    <Row>
      {imgData.map((image, i) => (
        // <div className="imgContainer">
          <ImageComp
            url={image.url}
            isFav={image.isFavorite}
            id={image.id}
            key={i}
          />
        // </div>
      ))}
    </Row>
  );
}

export default PicSome;
