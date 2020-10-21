import React, {useState} from 'react';
import axios from 'axios';

const initialFormValues = {
    username: "",
    password: "",
    role: "",
  }

function SignUp()  {
    const [formData, setFormData] = useState(initialFormValues);

    const onChange = (evt) => {
        // console.log(evt.target)
        const {name, value} = evt.target;
        setFormData({
          ...formData,
          [name]: value,
        })
    }
  
  
  
    const handleSubmit = (evt) => {
        const postData = formData;
        evt.preventDefault();
        axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/register', postData)
        .then(res => {
          console.log(postData);
          console.log(res)
          setFormData(initialFormValues);
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
              type="text"
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





















