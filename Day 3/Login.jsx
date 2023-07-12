import React, { useState } from 'react';
import './LoginPage.css';
import ResponsiveAppBar from './Home';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required.';
    }
    if (!password) {
      validationErrors.password = 'Password is required.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form
    // You can perform your login logic or API call here
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div className="login-page">
      <div className='back'>
      {/* <div className='back' style={{display:"flex", flexDirection:"row", backgroundImage:'url(/images/poda.jpg)', backgroundSize:"contains", }}> */}
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <nav>
          <Link to="/home">
        <button type="submit">Login</button>
        </Link>
        </nav>
      </form>
    </div>
    </div>
    
  );
};

export default LoginPage;
