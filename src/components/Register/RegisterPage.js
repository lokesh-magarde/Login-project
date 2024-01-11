import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const userData = {
      username,
      Email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    setUsername('');
    setEmail('');
    setPassword('');

    console.log('User registered successfully!');
  };

  return (
    <div className='container'>
     <div className='mt-2 pt-2'>
     <div className='border p-3 m-4 '>
        <h1>Register Page</h1>
        <form onSubmit={handleRegister}>

          <div class="mb-3">
            <label class="col-sm-2 col-form-label" >Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Name" value={username} onChange={handleUsernameChange} />
            </div>
          </div>
          <div class="mb-3">
            <label class="col-sm-2 col-form-label" >Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="@email.com" value={username} onChange={handleEmailChange} />
            </div>
          </div>
          <div class="mb-3">
            <label class="col-sm-2 col-form-label" >password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="password" value={username} onChange={handlePasswordChange} />
            </div>
          
          </div>

          <button type="submit" className='btn btn-primary'>Register</button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default RegisterPage;
