import React, { Component, useState} from 'react'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'




class Signup extends Component {
    state = {
        username: '',
        password: '',
        role: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/register', this.state)
        .then(res => {
                console.log(res)
            })

            .catch(err => {
                console.log(err, "oops teehee")
            })
    }


    render() {

    const {username, password, role} = this.state

    return (

        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h2 className="grey-text">Sign Up</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Username<br/>
                        </label>
                        <input name = 'username' type="text" id="username" value = {username} onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input name="password" type="password" id="password" value = {password} onChange={this.handleChange} />
                </div>

                <div>
                    <label> Role (Enter 1 for Operator or 2 for Diner): </label>
                    <input name = 'role' type = 'text' id ='role' value = {role} onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <button className="input-btn" type = 'submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
}

export default Signup
