// Login.js
import React, { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { useAuth } from './AuthContext';
// import { login } from './store';
import './Login.css';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import { Route,Navigate } from 'react-router-dom';

const Login = () => {

  // const dispatch = useDispatch();
  // const { login: loginAuth } = useAuth();
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    // const admins = [{ username: 'admin', password: 'admin123' }];
    event.preventDefault();
    const users = [{ username: 'user', password: 'user@123fxyz' }];

    // const isAdmin = admins.find((admin) => admin.username === username && admin.password === password);
    const isUser = users.find((user) => user.username === username && user.password === password);

    // if (isAdmin) {
    //   const user = { username, role: 'admin' };
    //   dispatch(login(user));
    //   loginAuth(user);
    // }
    // console.log(isUser);
    if (isUser) {
      // const user = { username, role: 'user' };
      // dispatch(login(user));
      // loginAuth(user);
      console.log("HI");
      window.location.href = '/dashboard';
  
    } else {
      alert('Authentication failed. You are not authorized to access.');
     
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="txt_field">
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        {/* <Link to="/dashboard"> */}
        <button type='submit'>Login</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;