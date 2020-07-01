import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import sectionAction from '../../Actions/sectionAction';
import api from '../../services/api';
import './styles.css';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  async function handlelogin(event) {
    event.preventDefault();

    try {
      await api.post('dashboard/access/login', {
        email,
        password: pass
      })
      
      .then(response => {
        localStorage.setItem('section-auth-token', response.data.token);
        dispatch(sectionAction(response.data.auth));
        history.push('/dashboard/list');
      });

    } catch (error) {
      alert('Falha no login');
    }
  }

  return(
    <div className="login">
      <div className="login__content">
        <div className="login__form">

          <h1>Login</h1>

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