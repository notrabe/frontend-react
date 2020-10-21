import React, {useState, useContext, useEffect} from 'react';
import {TruckContext} from '../context/TruckContext'
import Truck from './Truck'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const TruckList = () => {
    const [trucks, setTrucks] = useState([])
    useEffect(()=>{
        axiosWithAuth()
            .get(`/api/trucks`)
            .then(res => {
                console.log(res)
                setTrucks(res.data)
                localStorage.getItem('token')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {trucks.map(truck => (
                <Truck  name = {truck.name} cuisine = {truck.cuisine} location={truck.location}/>    
            ))}
        </div>
        
    )
}



export default TruckList