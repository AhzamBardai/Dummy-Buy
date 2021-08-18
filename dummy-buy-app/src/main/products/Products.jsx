import React from 'react'

function Products({ item, setItems }) {

    const wid = item.category === 'electronics' ? 'auto' : '100px'

    return (
        <div className='card'>
            <img alt={item.title} src={item.image} width= {wid} />
            <p>{item.title}</p>
        </div>
    )
}

export default Products
