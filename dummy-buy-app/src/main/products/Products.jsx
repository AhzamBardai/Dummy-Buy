import React from 'react'

function Products({ item, setItems }) {
    return (
        <div className='card'>
            <img alt={item.title} src={item.image} />
            <p>{item.title}</p>
        </div>
    )
}

export default Products
