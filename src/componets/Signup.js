import React, { Component} from 'react'




class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h2 className="grey-text">Sign Up</h2>
                <div className="input-field">
                    <label htmlFor="password">
                        Email<br/>
                        </label>
                        <input className="input" type="email" id="email" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">
                        Password<br/>
                        </label>
                        <input className="input" type="password" id="password" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">
                        Last Name<br/>
                        </label>
                        <input className="input" type="lastName" id="lastName" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="firstName">
                        First Name<br/>
                        </label>
                        <input className="input" type="firstName" id="firstName" onChange={this.handleChange} />
                </div>

                <div className="input-field">
                    <button className="input-btn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
}

export default Signup
