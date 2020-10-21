import React, {useEffect, useState} from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AllTrucks from './AllTrucks'
import DDTruckList from './DDTruckList'




function DinerDashboard (){

    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <h3>Available trucks: </h3>
            <DDTruckList/>
        </div>
    )
}

export default DinerDashboard