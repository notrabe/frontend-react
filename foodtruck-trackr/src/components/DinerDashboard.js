import React, {useState} from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import OperatorDashboard from './OperatorDashboard'
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AllTrucks from './AllTrucks'




function DinerDashboard (){
    
    const [currentTrucks, setCurrentTrucks] = useState([])
    axiosWithAuth()
        .get(`/api/trucks`)
        .then(res => {
            console.log(res)
            setCurrentTrucks(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <h3>Available trucks: </h3>
            <h4>{currentTrucks.map(truck => (
                <AllTrucks  name = {truck.name}/>))}</h4>
        </div>
    )
}

export default DinerDashboard