import React, {useEffect, useState} from 'react';
import AddMenuItem from './AddMenuItem'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Truck = ({name, cuisine, location, id}) => {

    const [rating, setRating] = useState('')
    const reducer = (accumulator, currentValue) => accumulator + currentValue


    const deleteTruck = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .delete(`api/trucks/${id}`)
            .then(res=>{
                console.log(res)
                localStorage.getItem('token')
            })
            .catch(err => {
                console.log(err)
            })

        }

    const getAverageRating = () => {
        axiosWithAuth()
            .get(`api/trucks/${id}`)
            .then(res=>{
                console.log(res.data.reviews)
                localStorage.getItem('token')

                const allRatings = res.data.reviews.map(item => item.rating)

                console.log(allRatings)
                
                const ratingTotal = allRatings.reduce(reducer)
                
                const averageRating = ratingTotal/allRatings.length
                setRating(averageRating)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
            
            getAverageRating()


    return(
        <div>
            <h3>{name}: {rating} </h3>
            <p>{cuisine}</p>
            <p>{location}</p>
            
            <button onClick = {deleteTruck}>Delete</button>

        </div>
    )
}

export default Truck