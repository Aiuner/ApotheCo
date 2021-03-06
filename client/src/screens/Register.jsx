import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;

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
        props.registerSubmit(formData)
      }}>
        <h3>Register</h3>
        <label>Username:
          <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Email:
          <input
            type='text'
            name='email'
            value={email}
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
        <button className="login-register-logout">Register</button>
        <button><Link to='/' className="login-register-logout">Back to Home</Link></button>
      </form>
    </div>
  );
}