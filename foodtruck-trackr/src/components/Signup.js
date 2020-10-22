import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const initialFormValues = {
    username: "",
    password: "",
    role: "",
  }

function SignUp()  {
    const [formData, setFormData] = useState(initialFormValues);
    const history = useHistory()

    const onChange = (evt) => {
        // console.log(evt.target)
        const {name, value} = evt.target;
        setFormData({
          ...formData,
          [name]: value,
        })
    }
  
  
  
    const handleSubmit = (evt) => {
        const postData = {
          username: formData.username,
          password: formData.password,
          role: formData.role
        };
        evt.preventDefault();
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/register', postData)
        .then(res => {
          console.log(postData);
          console.log(res)
          setFormData(initialFormValues);
          localStorage.setItem('token', res.data.token)
          const tokenHeader = {
            headers:{
              'Authorization': res.data.token
          }}
          axios.get('https://bw-foodtruck-tracker.herokuapp.com/api/users', tokenHeader)
          .then(res => {
              console.log(res.data);
              const user = res.data.filter(item => {
                  return item.username === formData.username
              })
              console.log(res.data[0].role)
              if (res.data.role === 1) {
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
        })

    }
  

  
  return (
    <div className="signin-container">
    <h1>Food Truck</h1>
    <form className="signup-container" onSubmit={handleSubmit}>
      <label>Username:{' '}
        <input 
            value={formData.username}
            onChange={onChange}
            name="username"
            type="text"
            className="input"
        />
      </label>
      <label>Password:{' '}
          <input 
              value={formData.password}
              onChange={onChange}
              name="password"
              type="password"
              className="input"
          />
      </label>
      <label>User Type:{' '}
          <select onChange={onChange} value={formData.role} name="role">
              <option value="">--Select an Option--</option>
              <option value="1">Operator</option>
              <option value="2">Diner</option>
          </select>
      </label>

      <button>Submit</button>
    </form>
</div>
  );
}

export default SignUp





















