import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './componets/Signin';
import Signup from './componets/Signup';
import './App.css'

class App extends Component {

  render() {
  return (



      <Router>
        <div className="App">
          
          <div className="nav-links">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx-1_0MUCoeqLDVJog4Gbfbh1vyFAtldTT4A&usqp=CAU" alt="" />
            <h1>Food Truck</h1>
            <ul>
                <Link to ='/signin'><li>Sign In</li></Link>
                <Link to='/signup'><li>Sign Up</li></Link>
            </ul>
        </div>
          <Switch>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
          </Switch>
        </div>
      </Router>

  )
}
}


export default App
