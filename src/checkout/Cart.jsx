import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import FillCart from './FillCart'

function Cart({ fillCart, setFillCart }) {

    const list = '1234567890abcdefghijklmnopqrstuvwxyz'
    const [id, newId] = useState('')
    const [total, setTotal] = useState(0)
    // const [price, setPrice] = useState([])

    const getId = () => {
        var str = ''
        for(let i = str.length; i < 24; i++ ) {
            id.length === 0 ? str += list[Math.floor(Math.random() * list.length)] : newId('') 
        }
        id === str ? getId() : newId(str)
    }

    useEffect(() => {
        var t = total
        fillCart.forEach(i =>  t = t + i.price)
        setTotal(t)
    }, [])

    const removeItem = (id) => {
        const arr = fillCart.filter(item => item.id !== id)
        setFillCart(arr)
    }

    return (
        <div className='cart-page'>
            <Header />
            <div className='cart-container'>
                <div className='cart' >
                    <div className='cart-header'>
                        <h1>Checkout</h1>
                        <h4>Total items: {fillCart.length}</h4>
                    </div>
                
                    <div>
                        {fillCart.map((item) => <FillCart item={item} removeItem={removeItem} /> )}
                    </div>

                    <div className='cart-total'>
                        <h1>Cart Total: </h1>
                        <h4>Quantity: {fillCart.length}</h4>
                        <h1>${total.toFixed(2)}</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cart
