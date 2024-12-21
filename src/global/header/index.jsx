import React from 'react';
import {Link} from "react-router-dom";


function Header (){
    return (
        
        
            <header>
                

            <nav> 

            <Link to="/" style={{textDecoration:"none", color:"black"}}><span>Home</span></Link>
            <Link to="/products" style={{textDecoration:"none", color:"black"}}><span>Products</span></Link>
            <Link to="/checkout" style={{textDecoration:"none", color:"black"}}> <span>Checkout</span></Link>
            <Link to="/receipts" style={{textDecoration:"none", color:"black"}}><span>My Receipts</span></Link>
             <Link to="/carticon" style={{textDecoration:"none", color:"black"}}>  <span>carticon</span></Link>
             </nav>
           
          
            </header>

    )
}

export default Header;