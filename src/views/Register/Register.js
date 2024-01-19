import React from 'react'

import { Helmet } from 'react-helmet'

import './Register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - 361 Project</title>
        <meta property="og:title" content="Register - 361 Project" />
      </Helmet>
      <input type="text" className="register-full-name input" />
      <input type="text" className="register-username input" />
      <input type="text" className="register-password input" />
      <input type="text" className="register-email input" />
      <span className="register-text">Username:</span>
      <span className="register-text1">Full Name:</span>
      <span className="register-text2">Password:</span>
      <span className="register-text3">Email:</span>
      <button className="register-register button">
        <span>
          <span>Register Now!</span>
          <br></br>
        </span>
      </button>
      <h1>Register for an Account </h1>
    </div>
  )
}

export default Register
