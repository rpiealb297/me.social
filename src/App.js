import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Body from './components/body';
import Login from './components/login';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (data) => {
    if(data.mensaje == "Login correcto")
      setIsAuthenticated(true);
  };

  return (
    <div>
      {
      !isAuthenticated 
      ?  <Login onLoginSuccess={handleLoginSuccess} /> 
      :  <div class="page db-social">
          <Header />
          <Body />
         </div>
      }
    </div>
  );
}

export default App;
