import React from 'react'

function Filter() {
    return (
        <div className='filter-container'>
            <div>
                <div className='filter'>
                <p>Price:</p>

                <label>
                    <input type='text' id='price' placeholder='min' ></input>to 
                    <input type='text' id='price' placeholder='max' ></input>
                </label>

                <p>Categories:</p>

                <label><input type='checkbox' rel='jewlery' ></input>Jewlery</label>

                <label><input type='checkbox' rel='electronics' ></input>Electronics</label>

                <label><input type='checkbox' rel="Men's Clothing" ></input>Men's Clothing</label>

                <label><input type='checkbox' rel="Woman's Clothing" ></input>Woman's Clothing</label>

                <p>Reviews:</p>

                <label><input type='checkbox' rel='5star' ></input>⭐⭐⭐⭐⭐ </label>

                <label><input type='checkbox' rel='4star' ></input>⭐⭐⭐⭐</label>

                <label><input type='checkbox' rel="3star" ></input>⭐⭐⭐</label>

                <label><input type='checkbox' rel="2star" ></input>⭐⭐</label>

                <label><input type='checkbox' rel="1star" ></input>⭐</label>
                </div>

            </div>
        </div>
    )
}

export default Filter
