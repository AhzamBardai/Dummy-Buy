import React from 'react'
import { Link } from 'react-router-dom'

function Products({ item }) {

    const wid = item.category === 'electronics' ? 'auto' : '100px'

    return (
        <div className='card'>
            <Link to={`/product/${item.id}`}  style={{textDecoration: 'none'}}>
                <img alt={item.title} src={item.image} width= {wid} />
                <p >{item.title}</p>
            </Link>
        </div>
    )
}

export default Products
