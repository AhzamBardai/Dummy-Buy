import React from 'react'
import cart from '../images/cart.png'

function Header() {
    return (
        <header className="App-header">
            <div>
            <p className='nav'>Home</p>
            <p className='nav'>About</p>
            </div>
            <p className='App-name'>Dummy Buy</p>
            <div>
            <p className='nav'>Log in | Sign up</p>
            <p className='nav'><strong>Cart</strong><img alt='cart' src={cart} height='40px' width='40px' /></p>
            </div>
        </header>
    )
}

export default Header
