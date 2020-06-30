import React from 'react';
import api from '../../services/api';
import './styles.css';

import User from '../User';

const ListUser = () => {

  // async function handleLoadUsers() {
  //   try {
  //     await api.get('dashboard/admin/users', {
  //       headers: {
  //         'authorization-token': localStorage.getItem('dash-auth')
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   handleLoadUsers();
  // }, [users]);

  return (
    <div className="listUser">
      <div className="listUser__title">
        <h1>Lista de Usuários</h1>
      </div>

      <div className="listUser__list">
        <div className="listUser__listTitles">
          <div className="listUser__nameColumn">
            Avatar
          </div>

          <div className="listUser__nameColumn">
            Nome  
          </div>

          <div className="listUser__nameColumn">
            Email
          </div>

          <div className="listUser__nameColumn space">
            Status
          </div>

          <div className="listUser__nameColumn">
            Ações
          </div>
        </div>

        <div className="listUser__user">
          
        </div>
      </div>
    </div>
  );
}

export default ListUser;