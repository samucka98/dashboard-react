import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const CadUser = () => {
  return(
    <div className="cadUser">
      <div className="cadUser__info">
        <h1>Cadastro de Usuários</h1>

        <p>
          Os usuários são aqueles que tem acesso a seu sistema,
          e podem ter permissões para cadastro de novos usuários,
          ou até mesmo fazer o gerenciamento do seu site, por padrão o usuário
          proprietário já vem de fábrica com todas as permissões possíveis concedidas.
        </p>
      </div>

      <div className="cadUser__form">
        <div className="cadUser__formTitle">
          <h1>Novo Usuário</h1>
        </div>

        <div className="cadUser__formData">
          <div className="cadUser__formInput-2">
            <div className="cadUser__element">
              <label htmlFor="fname">
                Primeiro Nome <span className="req" >*</span>
              </label>
              
              <input
                type="text"
                name="fname" 
                id="fname"
                autoComplete="off" 
                placeholder="Seu Primeiro Nome"
              />
            </div>

            <div className="cadUser__element">
              <label htmlFor="lname">
                Último Nome <span className="req" >*</span>
              </label>
              
              <input
                type="text"
                name="lname" 
                id="lname"
                autoComplete="off" 
                placeholder="Seu Último Nome"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadUser;