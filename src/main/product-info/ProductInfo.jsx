import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Reviews from './Reviews'
import data from '../../reviews/data.json'

function ProductInfo(props) {

    // const [reviews, setReviews] = useState(data)


    const item = props.items.filter(i => i.id === parseInt(props.match.id))

    const h = item[0].category === 'electronics' ? '400px' : item[0].category === 'jewelery' ? '400px' : '500px'
    const w = (item[0].id === 9 || item[0].id === 12) ? '300px' : item[0].category === 'electronics' ? '500px' : item[0].category === "jewelery" ? '350px' : 'auto'

    return (
        <div>
            <Header />
            <div className='product-info-container'>
                <div className='product-info'>
                    <img alt='product' src={item[0].image} height={h} width={w} />

                    <div>
                        <h1>{item[0].title}</h1>
                        <p><strong>Category:</strong><br/>{item[0].category}</p>
                        <p><strong>Description:</strong><br/>{item[0].description}</p>
                        <p><strong>Price: </strong><br />${item[0].price}</p>

                        <Link to='/checkout'><button onClick={() => props.setFillCart([...props.fillCart, item])}>Add to cart</button></Link>
                    </div>

                </div>

                {/* <div className='reviews'>
                    {reviews.map(rev => rev.id === item[0].id && <Reviews key={rev.id} rev={rev} setReviews={setReviews} reviews={reviews}/>)}
                </div> */}
            
            </div>
            
        </div>
    )
}

export default ProductInfo
