import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios' // Import the CSS file for styling
import Validation from './SignupValidation';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [values, setValues] = useState({
        name:'',
        email:'',
        phoneNumber:'',
        password:''
      })
      const navigate = useNavigate();
      const [errors, setErrors]=useState({})
      const handleInput = (e) => {
        setValues(prev =>({...prev, [e.target.name]: [e.target.value]}))
       
      };
      const handleLogin = (e) => {
        e.preventDefault();
       setErrors(Validation(values));
       if(errors.name==="" && errors.email==="" && errors.phoneNumber==="" && errors.password==="")
       {
         axios.post("http://localhost:8081/signup", values)
         .then(res =>{
            navigate('/login');
         })
         .catch(err => console.log(err));
       }
      };

  return (
    <div className="hello">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form action="" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name='name'
            onChange={handleInput}
          />
           {errors.name && <span className='text-danger'> {errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name='email'
            onChange={handleInput}
          />
           {errors.email && <span className='text-danger'> {errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name='phoneNumber'
            onChange={handleInput}
          />
           {errors.phoneNumber && <span className='text-danger'> {errors.phoneNumber}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name='password'
            onChange={handleInput}
          />
           {errors.password && <span className='text-danger'> {errors.password}</span>}
        </div>
        <button className="signupbtn" type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;