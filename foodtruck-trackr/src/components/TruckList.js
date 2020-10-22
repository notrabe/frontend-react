import React, {useState, useContext, useEffect} from 'react';
import {TruckContext} from '../context/TruckContext'
import Truck from './Truck'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const initialTruck = {
    name: '',
    cuisine: '',
    location: '',
    id: '',
}

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
        <div className="truckList-container">
            {trucks.map(truck => (
                <Truck  name = {truck.name} cuisine = {truck.cuisine} location={truck.city} id = {truck.id}/>    
            ))}
           
        </div>
        
    )
}



export default TruckList