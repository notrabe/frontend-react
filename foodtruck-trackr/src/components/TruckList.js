import React, {useState, useContext} from 'react';
import {TruckContext} from '../context/TruckContext'
import Truck from './Truck'

const TruckList = () => {
    const [trucks, setTrucks] = useContext(TruckContext)

    return (
        <div>
            {trucks.map(truck => (
                <Truck  name = {truck.name} cuisine = {truck.cuisine} menu={truck.menu}/>    
            ))}
        </div>
        
    )
}



export default TruckList