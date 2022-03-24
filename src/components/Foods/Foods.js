import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([])


    useEffect( () =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    } , []);

    const handleAddToCart = food => {
        const newCart = [...cart, food]
        setCart(newCart)
    }

    return (
        <div>
           <div className='search-area'>
                <input id='search-field' type="text" />
                <button>Search</button>
           </div>
            <div className='foods-container'>
                <div className='food-container'>
                    {
                        foods.map(food => <Food 
                            key={food.idMeal} 
                            food={food}
                            handleAddToCart={handleAddToCart}
                            ></Food> )
                    }
                </div>
                <div className='order-summary'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Foods;