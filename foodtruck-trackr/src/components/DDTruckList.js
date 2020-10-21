import React, {useEffect, useState} from 'react';
import AllTrucks from './AllTrucks'
import {axiosWithAuth} from '../utils/axiosWithAuth'


function DDTruckList(){
    const [currentTrucks, setCurrentTrucks] = useState([])
    useEffect(()=>{
        axiosWithAuth()
            .get(`/api/trucks`)
            .then(res => {
                console.log(res)
                localStorage.getItem('token')
                setCurrentTrucks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
        console.log(currentTrucks)

    return(
        <div>
            {currentTrucks.map(truck => (
                <AllTrucks  name = {truck.name} location = {truck.city} cuisine = {truck.cuisine} id = {truck.id}/>))}
        </div>
    )
}

export default DDTruckList