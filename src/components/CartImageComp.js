import React, { useContext } from "react";
// import { PicSomeContext } from "../../context/PicSomeContext";
import {Col,Image} from 'react-bootstrap'

function CartImageComp({ image, serialNum }) {
  return (
    <div className="cart-item-div">
        <span className="serial-num">{serialNum+1}</span>
        <img src={image.url} alt="cart-item" className='cart-item-img'/>
    </div>
  );
}

export default CartImageComp;
