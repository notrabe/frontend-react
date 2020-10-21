import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const onError = (errors, e) => console.log(errors, e);

 


  axios.post('https://bw-foodtruck-tracker.herokuapp.com/api/auth/register')
        .then(res => {
            handleSubmit = (event) => {
                event.preventDefault(event)
            }
                console.log(res)
            })

            .catch(err => {
                console.log(err, "oops teehee")
            })


  
  return (
    <form className="signup-container" onSubmit={handleSubmit(onSubmit, onError)}>
      <input className="input" type="text" placeholder="First Name" name="First Name" ref={register({required: true, max: 60, min: 3, maxLength: 60})} />
      <input className="input" type="text" placeholder="Last Name" name="Last Name" ref={register({required: true, max: 60, min: 3, maxLength: 60})} />
      <input className="input" type="email" placeholder="Email" name="Email" ref={register({required: true})} />
      <input className="input" type="text" placeholder="Password" name="Password" ref={register({required: true})} />

      <input className="input" type="submit" />
    </form>
  );
}





















