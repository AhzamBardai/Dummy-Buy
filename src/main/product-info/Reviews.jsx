import React, { useState } from 'react'

function Reviews({ rev, reviews, setReviews }) {

    const [newReview, setNewReview] = useState(rev)

    const getReview = {
        stars : 0,
        review : []
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewReview({...newReview.reviews = [...rev.reviews, getReview]})
        setReviews(newReview)
        console.log(reviews)
    }

    return (
        <div>
            {rev.reviews.map(r => {
                var stars = ''
                for(var i = 0; i < r.stars; i++) stars += '⭐'

                return(
                    <div>
                        <p>Rating: {stars}</p>
                        <p>Review: {r.review}</p>
                    </div>
                    
            )})}

            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Add Stars (1 - 5): <input className='stars' type='number' placeholder='# of stars' min='1' max='5' defaultValue='' onChange={(e) => getReview.stars = parseFloat(e.target.value)} ></input></label>

                <label>Add Review: </label>
                    <textarea type='text' placeholder='Enter Review' rows='5' defaultValue='' onChange={(e) => getReview.review = e.target.value} ></textarea>

                <button type='submit' >Submit Review</button>
            </form>

        </div>
    )

}

export default Reviews
