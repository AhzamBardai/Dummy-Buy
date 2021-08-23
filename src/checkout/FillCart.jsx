import React,{ useState, useEffect } from 'react'

function FillCart({ item }) {


    // const newPrice = item[0].price * counter
    // console.log( newPrice)

    // useEffect(() => incrementItem(item, counter), [])
    
    return (
        <div className='cart-items'>
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
