import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

function ProductInfo(props) {

    const item = props.items.filter(i => i.id === parseInt(props.match.id))
    console.log(item, props.items, props.match.id)

    const h = item[0].category === 'electronics' ? '400px' : '500px'
    const w = (item[0].category === 'electronics' || item[0].category === "jewelery") ? '400px' : 'auto'

    return (
        <div>
            <Header />
                <div className='product-info'>
                    <img alt='product' src={item[0].image} height={h} width={w} />

                    <div>
                        <h1>{item[0].title}</h1>
                        <p><strong>Category:</strong><br/>{item[0].category}</p>
                        <p><strong>Description:</strong><br/>{item[0].description}</p>

                        <button>Add to cart</button>
                        <button>Add Review</button>
                    </div>

                </div>

            <Footer styling={true} />
        </div>
    )
}

export default ProductInfo
