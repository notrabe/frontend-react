import React from 'react';
import { Route, NavLink, Switch, useHistory } from 'react-router-dom'
import OperatorDashboard from './components/OperatorDashboard'
import DinerDashboard from './components/DinerDashboard'
import Truck from './components/Truck'
import './App.css';

function App() {
  return (
    <div className="App">
        <NavLink to='/operatordashboard'>Operator Dashboard</NavLink>
        <NavLink to='/dinerdashboard'>Diner Dashboard</NavLink>
        <Switch>
          <Route path = '/home'/>

          <Route path ='/operatordashboard'>
            <OperatorDashboard/>
          </Route>

          <Route path ='/dinerdashboard'>
            <DinerDashboard/>
          </Route>
        </Switch>

      
    </div>
  );
}

export default App;
