import React, { useState, useEffect } from 'react'

function Cart({ show }) {

    const list = '1234567890abcdefghijklmnopqrstuvwxyz'
    const [id, newId] = useState('')

    const getId = () => {
        var str = ''
        for(let i = str.length; i < 24; i++ ) {
            id.length === 0 ? str += list[Math.floor(Math.random() * list.length)] : newId('') 
        }
        id === str ? getId() : newId(str)
    }


    return (
        <div className={show ? 'cart' : null} >
            <p>hello</p> 
        </div>
    )
}

export default Cart
