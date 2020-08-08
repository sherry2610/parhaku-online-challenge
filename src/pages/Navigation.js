import React from "react";
import {Link} from 'react-router-dom'
import {Nav} from "react-bootstrap";

function Navigation() {
  return (
    <div className="App">
      <Nav      
        
      >
        <Nav.Item>
          <Link to='/'>Pic Some</Link>
        </Nav.Item>
        <Nav.Item>
        <Link to='/cart'>Cart</Link>
        </Nav.Item>
        
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
