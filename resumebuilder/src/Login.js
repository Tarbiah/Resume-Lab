import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import Validation from './LoginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 
function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const [errors, setErrors]=useState({})
  const navigate = useNavigate();
  const handleInput = (e) => {
    setValues(prev =>({...prev, [e.target.name]: [e.target.value]}))
   
  };
  const handleLogin = (e) => {
    e.preventDefault();
   setErrors(Validation(values));
   if(errors.email==="" && errors.password==="")
       {
         axios.post("http://localhost:8081/login", values)
         .then(res =>{
            if(res.data==="Success")
            {
                navigate('/body');
            }else{
                alert("no record existed");
            }
         })
         .catch(err => console.log(err));
       }
  };
  return (
    <div className="bello">
    <div className="login-container">
      <h2>Login</h2>
      <form action="" onSubmit={handleLogin}>
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
          <label>Password:</label>
          <input
            type="password"
            name='password'
            onChange={handleInput}
          />
                   {errors.password && <span className='text-danger'> {errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
