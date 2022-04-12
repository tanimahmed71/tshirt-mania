import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
            {
                cart.map(tshirt=>
                <p>{tshirt.name}
                <button onClick={()=>handleRemoveCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;