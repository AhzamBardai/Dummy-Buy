import React, { useState} from 'react'



function Filter({ items, setItems, getItems}) {

    const newItems = items
    const [priceMin, setPriceMin] = useState({price : 0})
    const [priceMax, setPriceMax] = useState({price : 0})

    const [category, setCategory] = useState([
            {cat : 'jewelery', active : false}, 
            {cat : 'electronics', active : false }, 
            {cat : "men's clothing", active : false }, 
            {cat : "women's clothing", active : false}
        ])
    const [review, setReview] = useState([
        {review : '5star', active : false}, 
        {review : '4star', active : false}, 
        {review : '3star', active : false}, 
        {review : '2star', active : false}, 
        {review : '1star', active : false} 
    ])

    const changeCategory = (categoryStr, checked) => {
        const arr = category
        arr.forEach(element => element.cat === categoryStr && (element.active = checked));
        setCategory(arr)
    }

    const changeReview = (reviewStr, checked) => {
        const arr = category
        arr.forEach(element => element.review === reviewStr && (element.active = checked));
        setCategory(arr)
    }

    console.log(category, priceMax, priceMin)

    const filterSubmit = (e) => {
        e.preventDefault()

        if(priceMin.price !== 0 && priceMax.price !== 0){
            const arr = newItems.filter(item => item.price >= priceMin.price && item.price <= priceMax.price)
            setItems(arr)
        } else if (priceMin.price !== 0 || priceMax.price !== 0) {
            const arr = newItems.filter(item => (priceMin.price !== 0 && item.price >= priceMin.price) || (priceMax.price !== 0 && item.price <= priceMax.price))
            setItems(arr)
        } 

        if(category.some(i => i.active)) {
            const catActive = category.filter(cat => cat.active)
            console.log(catActive)
            const arr =  []
            catActive.forEach(i => newItems.forEach(item => item.category === i.cat && arr.push(item)))
            setItems(arr)
        }
    }

    return (
        <div className='filter-container'>
            <div>
                <form className='filter' onSubmit={e => filterSubmit(e)}>

                <p>Price:</p>

                <label>
                    <input type='number' placeholder='min' defaultValue='' onChange={(e) => {e.preventDefault(); e.target.value !== '' ? setPriceMin({price : parseFloat(e.target.value)}) : setPriceMin({price : parseFloat(0)}) }} ></input>to 
                    <input type='number' placeholder='max' defaultValue='' onChange={(e) => {e.preventDefault(); e.target.value !== '' ? setPriceMax({price : parseFloat(e.target.value)}) : setPriceMax({price : parseFloat(0)}) }} ></input>
                </label>

                <p>Categories:</p>

                <label className='checkbox'><input type='checkbox' rel='jewelery' onChange={(e) => changeCategory('jewelery', e.target.checked)} ></input>Jewelery</label>

                <label className='checkbox'><input type='checkbox' rel='electronics' onChange={(e) => changeCategory('electronics', e.target.checked)} ></input>Electronics</label>

                <label className='checkbox'><input type='checkbox' rel="men's clothing" onChange={(e) => changeCategory("men's clothing", e.target.checked)} ></input>Men's Clothing</label>

                <label className='checkbox'><input type='checkbox' rel="women's clothing" onChange={(e) => changeCategory("women's clothing", e.target.checked)} ></input>Woman's Clothing</label>

                <div className='filter-button'> 
                    <button type='submit' >Submit</button>

                    <button type='button' onClick={() => getItems()} >Clear</button>
                </div>

                </form>

            </div>
        </div>
    )
}

export default Filter
