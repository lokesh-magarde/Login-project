import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterPage from '../Register/RegisterPage';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('username', username);
    console.log('password', password);

    setUsername('');
    setPassword('');
  }
  return (
    <div className='container'>
      <div className='mt-2 pt-2'>
        <div className='border p-4 m-5'>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit} className=' '>
            <div class="mb-3">
              <label class="col-sm-2 col-form-label" >Email</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="@email.com" value={username} onChange={handleUsernameChange} />
              </div>
            </div>
            <div class="mb-3">
              <label class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="password" value={password} onChange={handlePasswordChange} />
              </div>
              <Link to="/Register">Registered</Link>
            </div>
            <button type="submit" className='btn btn-primary'>Login</button>
          </form>
        </div>
        <img src="https://static.vecteezy.com/system/resources/previews/000/185/515/original/vector-creative-login-ui-template-form-design-with-technology-style-bac.jpg" alt='login page' width="300" height="300" />
      </div>
    </div>
  );
};

export default LoginPage;
