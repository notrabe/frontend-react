import React, {useEffect} from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import {TruckProvider} from '../context/TruckContext'
import DinerDashboard from './DinerDashboard'
import AddTruck from './AddTruck'
import TruckList from './TruckList'
import AddMenuItem from './AddMenuItem';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios'

function OperatorDashboard (){
    
    const history = useHistory()
    
    const handleLogOut = (e) =>{
        e.preventDefault()
        history.push('/')
    }
    
    // useEffect(()=>{
    //     axios
    //         .get(`https://bw-foodtruck-tracker.herokuapp.com/api/users`)
    //         .then(res=>{
    //             console.log(res)
    //             localStorage.getItem('token')
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }, [])



    return (
        <TruckProvider>    
            <div className="op-dashboard-container">
                <div className="op-dashboard-header">
                    <h1>Trucks:</h1>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
                <AddTruck/>
                <TruckList/>
            </div>
        </TruckProvider>
    )
}

export default OperatorDashboard