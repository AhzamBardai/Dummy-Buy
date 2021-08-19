import React from 'react'

function Filter({ items }) {
    return (
        <div className='filter-container'>
            <div>
                <div className='filter'>
                <p>Price:</p>

                <label>
                    <input type='text' placeholder='min' ></input>to 
                    <input type='text' placeholder='max' ></input>
                </label>

                <p>Categories:</p>

                <label className='checkbox'><input type='checkbox' rel='jewlery' ></input>Jewlery</label>

                <label className='checkbox'><input type='checkbox' rel='electronics' ></input>Electronics</label>

                <label className='checkbox'><input type='checkbox' rel="Men's Clothing" ></input>Men's Clothing</label>

                <label className='checkbox'><input type='checkbox' rel="Woman's Clothing" ></input>Woman's Clothing</label>

                <p>Reviews:</p>

                <label className='checkbox' onClick={e => console.log(e.target.value)} ><input type='checkbox' rel='5star' onChange={e => console.log(e.target.value)} ></input>⭐⭐⭐⭐⭐ </label>

                <label className='checkbox'><input type='checkbox' rel='4star' ></input>⭐⭐⭐⭐</label>

                <label className='checkbox'><input type='checkbox' rel="3star" ></input>⭐⭐⭐</label>

                <label className='checkbox'><input type='checkbox' rel="2star" ></input>⭐⭐</label>

                <label className='checkbox'><input type='checkbox' rel="1star" ></input>⭐</label>
                </div>

            </div>
        </div>
    )
}

export default Filter
