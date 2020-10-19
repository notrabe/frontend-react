import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './componets/Signin';
import './App.css'

class App extends Component {

  render() {
  return (



      <Router>
        <div className="App">
          <h1>Home Page</h1>
          <Switch>
            <Route path='/signin' component={Signin}/>
          </Switch>
        </div>
      </Router>

  )
}
}


export default App
