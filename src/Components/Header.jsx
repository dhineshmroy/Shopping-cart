import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = (props) => {
  return (
    <div className='navbar'>
        <div className='logo'>Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}><span className='cart-count'>{props.cart.length}</span> View Cart</Link>
            </li>
        </ul>
    </div>
  )
}
