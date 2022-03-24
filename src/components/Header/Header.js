import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='title'>
                    <h2>Food Bank</h2>
                </div>
                <div className='menu-container'>
                    <a href="/home">Home</a>
                    <a href="/order">Order</a>
                    <a href="/shop">Shop</a>
                    <a href="/about">About</a>
                </div>
            </div>

        </nav>
    );
};

export default Header;