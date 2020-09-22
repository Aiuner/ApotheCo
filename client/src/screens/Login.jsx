import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="content-panel">
      <form onSubmit={(e)=> {
        e.preventDefault();
        props.loginSubmit(formData);
      }}>
        <h3>Login</h3>
        <label>Username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Password:
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="login-register-logout">Log In</button>
        <button><Link to='/register' className="login-register-logout">Register</Link></button>
        <br />
        <button><Link to='/' className="login-register-logout">Back to Home</Link></button>
      </form>
    </div>
  );
}