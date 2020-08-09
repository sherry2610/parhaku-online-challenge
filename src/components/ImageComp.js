import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Image } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function ImageComp({ image, toggleCart, toggleFav }) {
  const [hovered, setHovered] = useState(false);

  function heartIcon() {
    if (image.isFavorite) {
      console.log("toggled!");
      return <FavoriteIcon className='icon' onClick={() => toggleFav(image.id)} />;
    } else if (hovered) {
      return <FavoriteBorderIcon className='icon' onClick={() => toggleFav(image.id)} />;
    }
  }

  function cartIcon() {
    if (image.inCart) {
      console.log("toggled!");
      return <AddCircleIcon className='icon' onClick={() => toggleCart(image.id)} />;
    } else if (hovered) {
      return <AddCircleOutlineIcon className='icon' onClick={() => toggleCart(image.id)} />;
    }
  }
  const hoveredIn = () => {
    setHovered(true);

    console.log("hovered!");
  };
  const hoveredOut = () => {
    setHovered(false);
    console.log("hovered out!");
  };
  return image.url ? (
    <Col xs={3} md={3}>
      <div>
        <div onMouseEnter={() => hoveredIn()} onMouseLeave={() => hoveredOut()}>
          <Image src={image.url} thumbnail />
          <div style={{height:"50px"}}>
          {heartIcon()}
          {cartIcon()}
          </div>
        </div>
      </div>
    </Col>
  ) : (
    <div></div>
  );
}

ImageComp.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  toggleFav: PropTypes.func.isRequired,
};

export default ImageComp;