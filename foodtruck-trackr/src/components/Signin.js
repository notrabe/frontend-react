
import React, { Component, useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import './Signin.css';



function Signin()  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const updateName = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const updatePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }



    const handleSubmit = (e) => {
        const postData = {
            username: username,
            password: password,
        }
        e.preventDefault();
        console.log(postData)
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/login', postData)
        .then(res => {
                console.log(res)
            })

            .catch(err => {
                console.log(err, "oops teehee")
            })
    }


    return (
        <div className="signin-container">
            <h1>Food Truck</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <h2 className="title">Sign In</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Username<br/>
                        </label>
                        <input className="input" type="text" id="username" value = {username} onChange={updateName} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input className="input" type="password" id="password" value = {password} onChange={updatePassword} />
                </div>


                <div className="input-field">
                    <button className="input-btn">Login</button>
                </div>
            </form>
        </div>
    )
}


export default Signin
