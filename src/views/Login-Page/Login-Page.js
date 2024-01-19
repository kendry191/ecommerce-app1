import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './Login-Page.css'

const LoginPage = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var url = `http://localhost:5257/login?username=${username}&password=${password}`;
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result){
          navigate("/");
          alert("Login Successful");
        } else {
          alert("Invalid credentials. Please try again");
        }})
      .catch(error => console.log('error'));

  }

  return (
    <div className="login-page-container">
      <Helmet>
        <title>Login-Page - 361 Project</title>
        <meta property="og:title" content="Login-Page - 361 Project" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" className="login-page-username input" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          <input type="password" className="login-page-password input" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <span className="login-page-text">Username:</span>
        <span className="login-page-text1">Password:</span>
        <button className="login-page-button button" type="submit">Login</button>
      </form>
      <div className="login-page-container1"></div>
      <Link to="/register" className="login-page-navlink button">
        Register
      </Link>
      <span className="login-page-text2">
        Not an account yet? Create one now
      </span>
      <h1 className="login-page-text3">Login Page</h1>
    </div>
  )
}

export default LoginPage
