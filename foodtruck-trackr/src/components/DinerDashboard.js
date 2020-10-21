import React, {useState} from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import OperatorDashboard from './OperatorDashboard'
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AllTrucks from './AllTrucks'




function DinerDashboard (){
    
    

    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <h3>Available trucks: </h3>
            <AllTrucks/>
        </div>
    )
}

export default DinerDashboard