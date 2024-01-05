import React, { useState } from 'react';

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
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <label>
          name
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
        <br />
          Email 
          <input type="text" value={Email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
