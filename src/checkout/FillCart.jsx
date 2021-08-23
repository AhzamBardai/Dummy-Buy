import React,{ useState, useEffect } from 'react'

function FillCart({ item, incrementItem }) {


    // const newPrice = item[0].price * counter
    // console.log( newPrice)

    // useEffect(() => incrementItem(item, counter), [])
    
    return (
        <div className='cart-items'>
            <span>
                <img alt='item' src={item[0].image} height='100px' width='100px'/>
            </span>
            <span className='item-info'>
                <p>{item[0].title}</p>
                <p>${item[0].price}</p>
            </span>
            <span>
                <span className='item-amount'>Quantity: 1</span>
            </span>
        </div>
    )

}

export default FillCart
