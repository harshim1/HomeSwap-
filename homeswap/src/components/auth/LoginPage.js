import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      navigate('/');
      window.location.reload()
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h3>LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            LOGIN
          </button>

          <p className="forgot-password text-right">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
