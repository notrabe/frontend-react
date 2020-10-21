import React, { useState} from 'react'
import axios from 'axios';





function Signup() {
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newRole, setNewRole] = useState('')

    const updateName = (e) => {
        setNewUsername([e.target.id].e.target.value)
    }

    const updatePassword = (e) => {
        setNewPassword([e.target.id].e.target.value)
    }

    const updateRole = (e) => {
        setNewRole([e.target.id].e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/register', state)
        .then(res => {
                console.log(res)
            })

            .catch(err => {
                console.log(err, "oops teehee")
            })
    }

    return (

        <div className="signup-container">
            <form onSubmit={handleSubmit} className="form-container">
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Username<br/>
                        </label>
                        <input name = 'username' type="text" id="username" value = {username} onChange={updateName} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input name="password" type="password" id="password" value = {password} onChange={updatePassword} />
                </div>

                <div>
                    <label> Role (Enter 1 for Operator or 2 for Diner): </label>
                    <input name = 'role' type = 'text' id ='role' value = {role} onChange={updateRole}/>
                </div>

                <div className="input-field">
                    <button className="input-btn" type = 'submit'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}


export default Signup
