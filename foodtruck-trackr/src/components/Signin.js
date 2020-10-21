import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Signin.css';

export default function App() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data); 
  const onError = (errors, e) => console.log(errors, e);
  
  axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/login')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

  return (
    <form className="signin-container" onSubmit={handleSubmit(onSubmit, onError)}>
      <input className="input" type="text" placeholder="Username" name="Username" ref={register({required: true, maxLength: 80})} />
      <input className="input" type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
       <span>Diner</span> 
      <input className="input"  name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
        <span>Operator</span>
      <input className="input"  name="Developer" type="radio" value="No" ref={register({ required: true })}/>

      <input className="input" type="submit" />
    </form>
  );
}























