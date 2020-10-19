import React from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import {TruckProvider} from '../context/TruckContext'
import DinerDashboard from './DinerDashboard'
import AddTruck from './AddTruck'
import TruckList from './TruckList'

function OperatorDashboard (){
    return (
        <TruckProvider>    
            <div>
                <NavLink to='/home'>Home</NavLink>
                <h1>Trucks:</h1>
                <AddTruck/>
                <TruckList/>
            </div>
        </TruckProvider>
    )
}

export default OperatorDashboard