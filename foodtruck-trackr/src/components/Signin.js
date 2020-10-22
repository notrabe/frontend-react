import React, {useState} from 'react';
import axios from 'axios';
import './Signin.css';
import {useHistory} from 'react-router-dom';



function Signin()  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userRole, setUserRole] = useState('')
    const history = useHistory()
  

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
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/login', postData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                const tokenHeader = {
                    headers:{
                        'Authorization': res.data.token
                    }
                    
                }
                axios.get('https://bw-foodtruck-tracker.herokuapp.com/api/users', tokenHeader)
                    .then(res => {
                        // console.log(res.data);
                        const user = res.data.filter(item => {
                            return item.username === username
                        })
                        if (user[0].role === 1) {
                            history.push('/operatordashboard')
                        } else {
                            history.push('/dinerdashboard')
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                
            })

            .catch(err => {
                console.log(err, "oops teehee")
                alert('invalid username or password')
            })
    }       


    return (
        <div className="signin-container">
            <h1>Food Truck</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <h2 className="title">Log In</h2>
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























