import React, {useState} from 'react'
import axios from 'axios';
import './Signin.css';


function Signin()  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const updateName = (e) => {
        setUsername([e.target.id].value)
    }

    const updatePassword = (e) => {
        setPassword([e.target.id].value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        axios.post ('https://bw-foodtruck-tracker.herokuapp.com/api/auth/login', e)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
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
