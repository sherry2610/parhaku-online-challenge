import React,{useState} from "react";
import PropTypes from 'prop-types';


import {  Col, Image } from "react-bootstrap";
import { HeartOutlined, HeartFilled, PlusCircleOutlined } from "@ant-design/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
function ImageComp({image,toggleCart,toggleFav}) {
const [hovered,setHovered] = useState(false)





function heartIcon() {
  if(image.isFavorite) {
      console.log("toggled!")
      return <FavoriteIcon onClick={() =>toggleFav(image.id)} />
  } else if(hovered) {
      return <FavoriteBorderIcon onClick={() =>toggleFav(image.id)} />
  }
}

function cartIcon() {
    if(image.inCart) {
        console.log("toggled!")
        return <AddCircleIcon onClick={() =>toggleCart(image.id)} />
    }
    else if(hovered){
        return <AddCircleOutlineIcon onClick={() =>toggleCart(image.id)} />
    }
  }

const cartOption = hovered && <AddCircleOutlineIcon />

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
        <div onMouseEnter={()=>hoveredIn()} onMouseLeave={()=>hoveredOut()}  >
        <Image src={image.url} thumbnail />
        {/* <img src={image.url} style={{height:"100%",width:"100%",margin:"20px"}}/> */}
        {heartIcon()}
        {cartIcon()}
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
