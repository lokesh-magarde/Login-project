import React, { useState } from 'react';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setUsername(event.target.value);
    };
   
    const handleSubmit = (event) => {
      event.preventDefault();

      console.log ('username', username);
      console.log('password', password);

      setUsername ('');
      setPassword ('');
}
  
  

  return (
    <div className='container'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
