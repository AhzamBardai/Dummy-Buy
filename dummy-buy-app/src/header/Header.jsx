import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from '../images/cart.png'
import Cart from '../checkout/Cart'

function Header() {

    const [showCart, setShowCart] = useState(false)

    const getCart = () => {
        setShowCart(true)
        return <Cart show={showCart} />
    }

    return (
        <header className="App-header">
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}><p className='nav'>Home</p></Link>
                <Link to='/about' style={{ textDecoration: 'none' }} ><p className='nav'>About</p></Link>
            </div>
                <Link to='/' style={{ textDecoration: 'none'}} ><p className='App-name'>Dummy Buy</p></Link>
            <div>
                <p className='nav'><Link to='/login' style={{ textDecoration: 'none', color: '#457778'  }} >Log in</Link> | <Link to='signup' style={{ textDecoration: 'none', color: '#457778'  }} >Sign up</Link></p>
                <p className='nav' onClick={() => getCart()} ><strong>Cart</strong><img alt='cart' src={cart} height='40px' width='40px' /></p>
            </div>
        </header>
    )
}

export default Header
