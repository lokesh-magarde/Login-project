import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className='App'>
      <LoginPage/>
      <RegisterPage/>
    </div>
  );
}

export default App;
