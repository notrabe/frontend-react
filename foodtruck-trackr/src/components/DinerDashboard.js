import React, {useEffect, useState} from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AllTrucks from './AllTrucks'
import DDTruckList from './DDTruckList'




function DinerDashboard (){
    // const [currentTrucks, setCurrentTrucks] = useState([])
  
    // useEffect(()=> {
    //     axiosWithAuth()
    //         .get(`/api/trucks`)
    //         .then(res => {
    //             console.log(res)
    //             setCurrentTrucks(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     },[])

    //         console.log(currentTrucks)
            
    //         currentTrucks.map(truck => 
    //             <AllTrucks name = {truck.name} location = {truck.location} cuisine = {truck.cuisine}/>)
    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <h3>Available trucks: </h3>
            <DDTruckList/>
        </div>
    )
}

export default DinerDashboard