import React,{useState} from "react";


import {  Col, Image } from "react-bootstrap";
import { HeartOutlined, HeartFilled, PlusCircleOutlined } from "@ant-design/icons";

function ImageComp({url,isFav,id,toggleFav}) {
const [hovered,setHovered] = useState(false)



function heartIcon() {
  if(isFav) {
      console.log("toggled!")
      return <HeartFilled onClick={() =>toggleFav(id)} />
  } else if(hovered) {
      return <HeartOutlined onClick={() =>toggleFav(id)} />
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
    return url ? (
 
    //    <h1>IMAGE</h1>
      <Col xs={6} md={2} >
          <div>
        <div onMouseEnter={()=>hoveredIn()} onMouseLeave={()=>hoveredOut()} >
        <Image src={url} thumbnail />
        {heartIcon()}
        {cartOption}
        </div>
   
        
        </div>

        </Col> 
     
      ) : (<div></div>);
}

  




export default ImageComp;
