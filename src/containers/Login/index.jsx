import React from 'react';
import './styles.css';
import api from '../../services/api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [auth, setAuth] = useState({});

  const history = useHistory();

  async function handlelogin(event) {
    event.preventDefault();

    try {
      await api.post('dashboard/access/login', {
        email,
        password: pass
      }).then(response => {
        setAuth(response.data);
        history.push('/dashboard');
      })

      console.log();
    } catch (error) {
      alert('Falha no login');
    }
  }

  return(
    <div className="login">
      <div className="login__content">
        <div className="login__form">

          <h1>Dashboard</h1>

          <input 
            type="email" 
            name="email" 
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="Senha"
            value={pass}
            onChange={event => setPass(event.target.value)}
          />

          <button onClick={handlelogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;