import React, { useContext } from "react";
import { PicSomeContext } from "../context/PicSomeContext";
import DeleteIcon from '@material-ui/icons/Delete';
import {Col,Image} from 'react-bootstrap'

function CartImageComp({ image, serialNum, deleteItem }) {
    // const {imgData,cartItems,setCartItems, setImgData} = useContext(PicSomeContext)
    
    
 
  return (
    <div className="cart-item-div">
        <span className="serial-num">{serialNum+1}</span>
        <img src={image.url} alt="cart-item" className='cart-item-img'/>
        <span className="item-cash">
            {5.99.toLocaleString("en-US", {style: "currency", currency: "USD"})}
        </span>
        <span className="delete-icon">
            <DeleteIcon onClick={()=>deleteItem(image.id)}/>
        </span>
    </div>
  );
}

export default CartImageComp;
