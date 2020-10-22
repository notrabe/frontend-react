import React from 'react';
import { Route, NavLink, Switch, useHistory, Link } from 'react-router-dom'
import OperatorDashboard from './components/OperatorDashboard'
import DinerDashboard from './components/DinerDashboard'
import Truck from './components/Truck'
import Signin from './components/Signin'
import Signup from './components/Signup'
import './App.css';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <ul>
          <img className="logo" src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146__340.png" alt="" />
          <NavLink to='/operatordashboard'>Operator Dashboard</NavLink>
          <NavLink to='/dinerdashboard'>Diner Dashboard</NavLink>           
          <Link to ='/signin'><li>Sign In</li></Link>
          <Link to='/signup'><li>Sign Up</li></Link>
        </ul>
      </div>
        
        <Switch>

          <Route path = '/home'/>

          
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>

          <PrivateRoute exact path ='/operatordashboard' component = {OperatorDashboard}/>

          <PrivateRoute exact path ='/dinerdashboard' component = {DinerDashboard}/>

        </Switch>

      
    </div>
  );
}

export default App;
