import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='order-summary'>
            <h3>Order summary</h3>
            {
                cart.map(food => <li key={food.idMeal}> {food.strMeal} </li>)
            }
        </div>
    );
};

export default Cart;