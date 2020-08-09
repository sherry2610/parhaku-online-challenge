import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import {Nav} from "react-bootstrap";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { PicSomeContext } from "../context/PicSomeContext";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../App.css'
function Navigation() {
  const { cartItems } = useContext(PicSomeContext);
  const cartIcon = cartItems.length === 0 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />

  return (
    <div className="nav-header">
      <Nav >
    
          <Link to='/' style={{position:"relative",left:"50px"}} >Pic Some</Link>
        
        
        <Link to='/cart' style={{position:"relative",left:"80%",size: "70px"}}>{cartIcon}</Link>
      
        
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    </div>
  );
}

export default Navigation;
