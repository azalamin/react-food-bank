import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Food.css';

const Food = ({food, handleAddToCart}) => {
    const {strMealThumb, strMeal, strInstructions, strArea, strTags} = food;
    
    return (
        <div className='food-card'>
            <div className='img-container'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='card-info'>
                <h3>{strMeal}</h3>
                <p><strong>Description:</strong> {strInstructions.slice(0, 110)}......</p>
                <p>{strArea}</p>
                <p>Tags: {strTags}</p>
                <button onClick={() => handleAddToCart(food)} className='cart-btn'>
                    Add To Cart <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    );
};

export default Food;