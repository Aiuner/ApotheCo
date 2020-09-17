import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Layout from './layouts/Layout.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Home from './screens/Home.jsx'

import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';

import logo from './logo.svg';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    removeToken();
    setCurrentUser(null);
    history.push('/');
  }

  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout} >
      <Switch>
        <Route path='/login'>
          <Login loginSubmit={loginSubmit} />
        </Route>

        <Route path='/register'>
          <Register registerSubmit={registerSubmit} />
        </Route>

        <Route path='/'>
          <Home currentUser={currentUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
