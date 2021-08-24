import React from 'react'
import { Link } from 'react-router-dom'

function Products({ item }) {

    const wid = item.category === 'electronics' ? 'auto' : '100px'

    if(item) {
    return (
        <div className='card'>
            <Link to={`/product/${item.id}`}  style={{textDecoration: 'none'}}>
                <img alt={item.title} src={item.image} width= {wid} />
                <p>{item.title}</p>
                <span>${item.price}</span>
            </Link>
        </div>
    )
    } else return <h1>No Items found.</h1>
}

export default Products
