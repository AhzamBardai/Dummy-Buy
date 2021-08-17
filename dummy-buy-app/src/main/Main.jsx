import React, { useState, useEffect } from 'react'
import Products from './products/Products'
import Filter from './products/Filter'

function Main() {

    const [items, setItems] = useState([])

    const getItems = async () => {

        const url = 'https://fakestoreapi.com/products/'

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setItems(res)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => getItems(), [])

    return (
        <div className='product-container'>

            <Filter />

            <div className='products'>

                <input type='text' id='searchbar' placeholder=' Enter item name or type' value='' ></input>

                <div className='product-cards'>

                    {items.map(item => <Products key={item.id} item={item} setItems={setItems} />)}
                    
                </div>

            </div>

        </div>
    )
}

export default Main
