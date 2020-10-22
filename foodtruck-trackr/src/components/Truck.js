import React from 'react';
import AddMenuItem from './AddMenuItem'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Truck = ({name, cuisine, location, id}) => {

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

    return(
        <div className="truck-card">
            <h3>{name}</h3>
            <p>{cuisine}</p>
            <p>{location}</p>
            <button onClick = {deleteTruck}>Delete</button>

        </div>
    )
}

export default Truck