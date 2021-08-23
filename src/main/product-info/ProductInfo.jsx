import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Reviews from './Reviews'
import data from '../../reviews/data.json'

function ProductInfo(props) {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState('Loading')
    const [active, setActive] = useState(true)

    const getItems = (id) => {

        const url = `https://fakestoreapi.com/products/${id}`
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setItem(res)
                setActive(false)
            })
            .catch(err => console.log(err))
      }
    
      useEffect(() => getItems(props.match.id), [])    

    // const [reviews, setReviews] = useState(data)

    // const item = items.filter(i => i.id ===  )

    const timeout = () => {
        loading === 'Loading....' ? setLoading('Loading') : setTimeout(() => setLoading(loading + '.'), 150)
        return loading
    }

    const h = item.category === 'electronics' ? '400px' : item.category === 'jewelery' ? '400px' : '500px'
    const w = (item.id === 9 || item.id === 12) ? '300px' : item.category === 'electronics' ? '500px' : item.category === "jewelery" ? '350px' : 'auto'
    console.log(item, parseInt(props.match.id))

    if(!active) {
    return (
        <div>
            <Header />
            <div className='product-info-container'>
                <div className='product-info'>
                    <img alt='product' src={item.image} height={h} width={w} />

                    <div>
                        <h1>{item.title}</h1>
                        <p><strong>Category:</strong><br/>{item.category}</p>
                        <p><strong>Description:</strong><br/>{item.description}</p>
                        <p><strong>Price: </strong><br />${item.price}</p>

                        <Link to='/checkout'><button onClick={() => props.setFillCart([...props.fillCart, item])}>Add to cart</button></Link>
                    </div>

                </div>

                {/* <div className='reviews'>
                    {reviews.map(rev => rev.id === item.id && <Reviews key={rev.id} rev={rev} setReviews={setReviews} reviews={reviews}/>)}
                </div> */}
            
            </div>
            
        </div>
    )
    } else {
        return (
            <>
            <Header />

            <h1 style={{textAlign:'center', marginTop:'10rem'}}>{timeout()}</h1>

            </>
        )
    }
}

export default ProductInfo
