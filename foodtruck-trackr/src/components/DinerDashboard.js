import React from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import OperatorDashboard from './OperatorDashboard'


function DinerDashboard (){
    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
        </div>
    )
}

export default DinerDashboard