import React, { useState } from 'react';
import Axios from "axios";
import { Navigate } from 'react-router-dom';

const Registration = ({ formToShow }) => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ username: '', email: '', password: '', re_password: '', selectedOption: '', isSubmitted:false });
  const [passwordError, setPasswordError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if(registrationData.password===registrationData.re_password)
    {
      setPasswordError('Password does not match');
    }
    let dataURL = '/users';
    Axios.post(dataURL, registrationData).then((response)=>{
      setRegistrationData({...registrationData, isSubmitted:true })
    }).catch((error)=>{
      console.error(error);
    });

  };

  const toggleRegistrationForm = () => {
      setShowRegistration(!showRegistration);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <pre>{JSON.stringify(registrationData)}</pre>
      <pre>{JSON.stringify(passwordError)}</pre>
      <div className="card p-4" style={{ maxWidth: '400px' }}>
        { registrationData.isSubmitted ? <Navigate to="/login" replace={true} /> :
        showRegistration && formToShow==="register" ? (
          <div>
            <h2 className="mb-4">Registration</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="mb-3">
                <input name="name" required
                type="text" className="form-control" placeholder="Username" 
                value={registrationData.username} 
                onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })} />
              </div>
              <div className="mb-3">
                <input name="email" required
                type="email" className="form-control" placeholder="Email" 
                value={registrationData.email} 
                onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })} />
              </div>
              <div className="mb-3">
                <select name="whoru" required
                class="form-select" aria-label="Default select example" 
                value={registrationData.selectedOption} 
                onChange={(e)=>setRegistrationData({ ...registrationData, selectedOption: e.target.value })}>
                  <option value="">Select an option</option>
                  <option value="Prospect Student">Prospect Student</option>
                  <option value="FAU Student">FAU Student</option>
                  <option value="Community Owner">Community Owner</option>
                </select>
              </div>
              <div className="mb-3">
                <input name="password" required
                type="password" className="form-control" placeholder="Enter Password..." 
                value={registrationData.password} 
                onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })} />
              </div>
              <div className="mb-3">
                <input name="re_password" required
                type="password" className="form-control" placeholder="Re-enter Password..." 
                value={registrationData.re_password} 
                onChange={(e) => setRegistrationData({ ...registrationData, re_password: e.target.value })} />
              </div>
              {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
              <button type="submit" className="btn btn-outline-danger w-100">REGISTER</button>
            </form>
            <p className="mt-3 text-center">Already have an account? <button className="btn btn-link p-0" onClick={toggleRegistrationForm}>Login</button></p>
          </div>
        ) : (
          <div>
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <input type="text" required className="form-control" placeholder="Username" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
              </div>
              <div className="mb-3">
                <input type="password" required className="form-control" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-outline-info w-100">LOGIN</button>
            </form>
            <p className="mt-3 text-center">Don't have an account? <button className="btn btn-link p-0" onClick={toggleRegistrationForm}>Register</button></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
