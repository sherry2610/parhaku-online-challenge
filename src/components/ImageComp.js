import React,{useState} from "react";


import {  Col, Image } from "react-bootstrap";
import { HeartOutlined, HeartFilled, PlusCircleOutlined } from "@ant-design/icons";

function ImageComp({url,isFav,id}) {
const [hovered,setHovered] = useState(false)
// function heartIcon() {
//   if(img.isFavorite) {
//       return <i className="ri-heart-fill favorite" onClick={() => 
//        toggleFavorite(img.id)}></i>
//   } else if(hovered) {
//       return <i className="ri-heart-line favorite" onClick={() => 
//         toggleFavorite(img.id)}></i>
//   }
// }
console.log(isFav)

const hoveredIn = () => {
    setHovered(true);

    console.log("hovered!");
  };
  const hoveredOut = () => {
    setHovered(false);
    console.log("hovered out!");
  };
    return url && (
 
    //    <h1>IMAGE</h1>
      <Col xs={6} md={2} >
          <div>
        <div onMouseEnter={()=>hoveredIn()} onMouseLeave={()=>hoveredOut()} >
        <Image src={url} thumbnail />
        </div>
        {hovered && (
            <div>
            <HeartOutlined />
            <PlusCircleOutlined />
            </div>
        )}
        {isFav && <HeartFilled />  }
        </div>

        </Col> 
     
      );
}

  




export default ImageComp;
