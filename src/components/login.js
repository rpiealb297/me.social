import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        handleLogin({ username, password }); // Utiliza el estado actual para el login
    };

    const handleLogin = async (credentials) => {
        try {
          const response = await fetch('http://me.social/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            mode: 'cors'
          });
    
          if (!response.ok) {
            throw new Error('Error en el login');
          }
    
          const data = await response.json();
          console.log(typeof onLoginSuccess);
          // Aquí manejas la respuesta. Por ejemplo, puedes guardar un token de autenticación.
          onLoginSuccess(data); // Llama a esta función si el login es exitoso
        } catch (error) {
          alert('Error al realizar el login:', error);
        }
    };


    return (
    <div class="container-fluid no-padding h-100">
            <div class="row flex-row h-100 bg-white">
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-12 no-padding">
                    <div class="elisyam-bg background-03">
                        <div class="elisyam-overlay overlay-08"></div>
                        <div class="authentication-col-content-2 mx-auto text-center">
                            <div class="logo-centered">
                                <a href="db-default.html">
                                    <img src="assets/img/logo.png" alt="logo"></img>
                                </a>
                            </div>
                            <h1>Join Our Community</h1>
                            <span class="description">
                                me.social is a vibrant social networking platform designed to celebrate individuality and foster community engagement. With an emphasis on personal expression, me.social offers users a unique space to share their stories, interests, and passions through dynamic content and interactive features.
                            </span>
                            <ul class="login-nav nav nav-tabs mt-5 justify-content-center" role="tablist" id="animate-tab">
                                <li><a class="active" data-toggle="tab" href="#singin" role="tab" id="singin-tab" data-easein="zoomInUp">Sign In</a></li>
                                <li><a data-toggle="tab" href="#signup" role="tab" id="signup-tab" data-easein="zoomInRight">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-7 col-md-7 col-sm-12 col-12 my-auto no-padding">
                    <div class="authentication-form-2 mx-auto">
                        <div class="tab-content" id="animate-tab-content">
                            <div role="tabpanel" class="tab-pane show active" id="singin" aria-labelledby="singin-tab">
                                <h3>Sign In To @me</h3>
                                <form onSubmit={handleSubmit}>
                                    <div class="group material-input">
        							    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        							    <span class="highlight"></span>
        							    <span class="bar"></span>
        							    <label>Email</label>
                                    </div>
                                    <div class="group material-input">
        							    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        							    <span class="highlight"></span>
        							    <span class="bar"></span>
        							    <label>Password</label>
                                    </div>
                                    <div class="row">
                                        <div class="col text-left">
                                            <div class="styled-checkbox">
                                                <input type="checkbox" name="checkbox" id="remeber"></input>
                                                <label for="remeber">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col text-right">
                                            <a href="">Forgot Password ?</a>
                                        </div>
                                    </div>
                                    <div class="sign-btn text-center">
                                        <button type="submit" class="btn btn-lg btn-gradient-01">Sign In</button>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Login;