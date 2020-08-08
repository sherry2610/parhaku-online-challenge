import React,{useState} from "react";
import PropTypes from 'prop-types';


import {  Col, Image } from "react-bootstrap";
import { HeartOutlined, HeartFilled, PlusCircleOutlined } from "@ant-design/icons";

function ImageComp({image,toggleFav}) {
const [hovered,setHovered] = useState(false)





function heartIcon() {
  if(image.isFavorite) {
      console.log("toggled!")
      return <HeartFilled onClick={() =>toggleFav(image.id)} />
  } else if(hovered) {
      return <HeartOutlined onClick={() =>toggleFav(image.id)} />
  }
}
const cartOption = hovered && <PlusCircleOutlined />

const hoveredIn = () => {
    setHovered(true);

    console.log("hovered!");
  };
  const hoveredOut = () => {
    setHovered(false);
    console.log("hovered out!");
  };
    return image.url ? (
 
    //    <h1>IMAGE</h1>
      <Col xs={6} md={2} >
          <div>
        <div onMouseEnter={()=>hoveredIn()} onMouseLeave={()=>hoveredOut()} >
        <Image src={image.url} thumbnail />
        {heartIcon()}
        {cartOption}
        </div>
   
        
        </div>

        </Col> 
     
      ) : (<div></div>);
}

  

ImageComp.propTypes = {
    image : PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired
    }),
    toggleFav : PropTypes.func.isRequired

}



export default ImageComp;
