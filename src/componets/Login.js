import React, {useState} from 'react';
import {useForm} from 'react-hook-form';



function Login() {
  
  const {register, handleSubmit, errors} = useForm();
  const [dropDown, setDropDown] = useState("Operator");
  

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
      <div className="container-logo">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx-1_0MUCoeqLDVJog4Gbfbh1vyFAtldTT4A&usqp=CAU" alt="" />

      <h1>Log In Here</h1><br/>
    <form className="forms-container" onSubmit={handleSubmit(onSubmit)} >
              <button className="btn-sign-up">Click here to Sign Up Instead</button>

      <input  type="username" placeholder="Username" name="username" ref={register({required: "USERNAME IS REQUIRED", minLength: {value: 8, message:"TOO SHORT" }})} />
      {errors.username && <p>Username is invalid</p>}

      <input type="text" placeholder="Email" name="email" ref={register({required: "EMAIL IS REQUIRED", minLength: {value: 4, message: "TOO SHORT" }})}/>
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" placeholder="Password" name="password" ref={register({required: "PASSWORD IS REQUIRED", minLength: {value: 8, message:"TOO SHORT" }})}/>
      {errors.password && <p>{errors.password.message}</p>}

      <input type="location" placeholder="Location" name="location" ref={register({required: "LOCATION IS REQUIRED", minLength: {value: 2, message:"TOO SHORT" }})}/>
      {errors.location && <p>{errors.location.message}</p>}

      <input type="submit" />
 
      
      
      {/* DROPDOWN FOR DINER OR OPERATOR HERE */}
        <h1>Choose To Get Started : {dropDown}</h1>
        <select  value={dropDown} onChange={(e) => {setDropDown(e.target.value)}} >
          <option value="Operator">Operator</option>
          <option value="Diner">Diner</option>
        </select>



    </form>
    </div>
  );
}

export default Login;