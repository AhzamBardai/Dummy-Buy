import React,{ useState, useEffect } from 'react'

function FillCart({ item, removeItem }) {


    // const newPrice = item[0].price * counter
    // useEffect(() => incrementItem(item, counter), [])
    
    
    return (
        <div className='cart-items'>
            <button type='button' style={{width:'2rem', height:'2rem'}} onClick={() => removeItem(item.id)}>x</button>
            <span>
                <img alt='item' src={item.image} height='100px' width='100px'/>
            </span>
            <span className='item-info'>
                <p>{item.title}</p>
                <p>${item.price}</p>
            </span>
            <span>
                <span className='item-amount'>Quantity: 1</span>
            </span>
        </div>
    )

}

export default FillCart
