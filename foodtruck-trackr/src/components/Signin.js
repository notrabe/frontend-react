import React, { Component} from 'react'
import axios from 'axios';



class Signin extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post ('https://bw-foodtruck-tracker.herokuapp.com/api/auth/login', this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })

    }

    render() {

    const {username, password} = this.state

    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h2 className="grey-text">Sign In</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Username<br/>
                        </label>
                        <input className="input" type="text" id="username" value = {username} onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input className="input" type="password" id="password" value = {password} onChange={this.handleChange} />
                </div>


                <div className="input-field">
                    <button className="input-btn">Login</button>
                </div>
            </form>
        </div>
    )
}
}

export default Signin
