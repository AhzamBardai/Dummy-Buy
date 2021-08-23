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

    // function getTotal () {
    //     var t = total
    //     fillCart.forEach(item => t = t + (item[0].price))
    //     setTotal(t)
    // }

    useEffect(() => {
        var t = total
        fillCart.forEach(i =>  t = t + i[0].price)
        setTotal(t)
    }, [])

    return (
        <div>
            <Header />

            <div className='cart' >
                <div className='cart-header'>
                    <h1>Checkout</h1>
                    <h4>Total items: {fillCart.length}</h4>
                </div>
            
                <div>
                    { fillCart.length ? fillCart.map((item) => <FillCart item={item} /> ) : <h1>Cart Empty</h1>}
                </div>

                <div className='cart-total'>
                    <h1>Cart Total: </h1>
                    <h4>${total}</h4>
                </div>

            </div>

        </div>
    )
}

export default Cart
