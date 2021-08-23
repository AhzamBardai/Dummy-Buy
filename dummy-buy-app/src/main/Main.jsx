import React, { useState } from 'react'
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer'
import Products from './products/Products'
import Filter from './products/Filter'
import Cart from '../checkout/Cart.jsx'

function Main({ items, getItems }) {

    const [newItems, setNewItems] = useState(items)
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState('Loading')

    const handleSearch = (e) => {
        // setFilter(true)
        setInput(e.target.value)
        console.log(e.target.value, newItems)
        const arr = newItems.filter(i => i.title.includes(input) || i.description.includes(input) || i.category.includes(input) || i.title.toLowerCase().includes(input) || i.description.toLowerCase().includes(input) || i.category.toLowerCase().includes(input) || i.title.toUpperCase().includes(input) || i.description.toUpperCase().includes(input) || i.category.toUpperCase().includes(input) || parseFloat(i.price) === parseFloat(input))
        e.target.value !== '' ? setNewItems(arr) : getItems()
    }

    const timeout = () => {
        loading === 'Loading....' ? setLoading('Loading') : setTimeout(() => setLoading(loading + '.'), 150)
        return loading
    }

    return (
        <div className="App">

            <Header />

            <div className='product-container'>
                

                <Filter items={newItems} setItems={setNewItems} getItems={getItems} setLoading={setLoading} />

                <div className='products'>

                    <input type='text' id='searchbar' placeholder=' Enter item name or type' defaultValue={input} onChange={e => handleSearch(e)} ></input>


                    <div className='product-cards'>

                        { items.length ? newItems.map(item => <Products key={item.id} item={item} />) : <h1>{timeout()}</h1>}
                        
                    </div>

                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Main
