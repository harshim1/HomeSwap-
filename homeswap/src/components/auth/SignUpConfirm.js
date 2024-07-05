import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const ConfirmSignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    confirmationCode: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmationSubmit = async (e) => {
    e.preventDefault();
    const { email, confirmationCode } = formData;

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      navigate('/signin'); // Redirect to sign-in page after successful confirmation
    } catch (error) {
      console.error('Error confirming sign up', error);
      setErrorMessage(error.message); // Display error message
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleConfirmationSubmit}>
          <h3>Confirm Sign Up</h3>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmationCode">Confirmation Code:</label>
            <input
              type="text"
              id="confirmationCode"
              name="confirmationCode"
              value={formData.confirmationCode}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Confirm Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmSignUp;
