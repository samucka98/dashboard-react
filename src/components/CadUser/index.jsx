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

        <div className="cadUSer__upload">
            <label htmlFor="avatar">Sua foto</label>
            <input 
              type="file" 
              name="avatar" 
              id="avatar"
            />
          </div>

          <div className="cadUser__formInput-2">
            <div className="cadUser__group">
              <label htmlFor="fname">
                Primeiro Nome <span className="req" >*</span>
              </label>
              
              <input
                type="text"
                name="fname" 
                id="fname"
                placeholder="Seu Primeiro Nome"
              />
            </div>

            <div className="cadUser__group">
              <label htmlFor="lname">
                Último Nome <span className="req" >*</span>
              </label>
              
              <input
                type="text"
                name="lname" 
                id="lname"
                placeholder="Seu Último Nome"
              />
            </div>
          </div>


          <div className="cadUser__formInput-2">
            <div className="cadUser__group">
              <label htmlFor="email">
                Email <span className="req" >*</span>
              </label>
              
              <input
                type="email"
                name="email" 
                id="email"
                placeholder="Seu melhor email"
              />
            </div>

            <div className="cadUser__group">
              <label htmlFor="pass">
                Senha <span className="req" >*</span>
              </label>
              
              <input
                type="password"
                name="pass" 
                id="pass"
                placeholder="Sua Senha"
              />
            </div>
          </div>

          <div className="cadUSer__formActions">
            <button>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadUser;