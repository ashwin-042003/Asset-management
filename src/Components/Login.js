import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './Auth';

export default function Login() {
  const navigate = useNavigate();
  const context = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/users?username=${username}&password=${password}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.length === 0) {
        setUsernameError('Invalid username or password');
        setPasswordError('Invalid username or password');
      } else {
        context.login(username)
        // Redirect or set user state upon successful login
        console.log('Login successful');
        navigate('/home');
        // Display a simple alert for successful login
        window.alert('Login successful!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='body' >
      <title>HappyTails</title>
      <div className="container">
        <div className="rightbox">
          <div className="header">
            <p id="hello">Log In</p>
          </div>
          <div className="details">
            <div className="username">
              <input
                type="text"
                name="usname"
                id="usid"
                placeholder="Username"
                style={{ color: "black" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="error">{usernameError}</p>}
            </div>
            <div className="password">
              <input
                type="password"
                name="psname"
                id="psid"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="submit">
              <input
                type="submit"
                name="Login"
                id="sub"
                value="Login"
                onClick={handleSubmit}
              />
            </div>
            <div className="or">
              <p>-------------or-------------</p>
            </div>
            <div className="create">
              <NavLink to="/signup"><p>Create new Account</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
