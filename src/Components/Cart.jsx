
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { cartContext } from '../App';
import './Cart.css';

export const Cart = () => {

    const { cart } = useContext(cartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, current)=> acc + parseInt(current.amount), 0))
    }, [cart])
    return(
        <>
            <h1 className='cart-heading'>Cart Products</h1>
            <div className='cart-container'>
                {cart.map((product) => (
                    <div className='cart-product' key={product.id}>
                    <div className='img'>
                        <img src={product.pic} alt={product.name} />
                    </div>
                    <div className='cart-product-details'>
                        <h2>{product.name}</h2>
                        <p>Price Rs. {product.amount} .00</p>
                    </div>
                </div>
                ))}
            </div>
            <h2 className='cart-amount'>Total Amount Rs: {total}</h2>
        </> 
    )
}