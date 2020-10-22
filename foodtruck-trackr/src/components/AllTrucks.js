import React, {useState} from 'react';
import DinerDasboard from './DinerDashboard'
import DDTruckList from './DDTruckList'
import {axiosWithAuth} from '../utils/axiosWithAuth'


export default function AllTrucks ({name, location, cuisine, id}) {

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')


    const postReview = (e) => {
        e.preventDefault()
        const postData = {
            rating: rating,
            review: review,
        }
        
        axiosWithAuth()
            .post(`api/trucks/${id}/review`, postData)
            .then(res => {
                console.log(res.data.reviews)
                localStorage.getItem('token')
                setReview('')
                setRating('')
            })
            .catch(err => {
                console.log(err)
            })

            alert('Your review has been submitted successfully!')
    }
    
    const updateReview = (e) => {
        setReview(e.target.value)
    }

    const updateRating = (e) => {
        setRating(e.target.value)
    }


    return(
        <div>
            <h3>{name}</h3>
            <p>{cuisine}, {location}</p>
            <form onSubmit={postReview}>

                <label> Rating 1-5:&nbsp;
                    <input type = 'text' name = 'rating' value = {rating} onChange={updateRating}/>
                </label>

                <label> Review:&nbsp;
                    <textarea value = {review}  name = 'review' onChange={updateReview}/>
                </label>

                <button>Submit</button>

            </form>

        </div>
    )
}