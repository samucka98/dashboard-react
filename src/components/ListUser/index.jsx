import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadUsers from '../../Actions/loadUsers';
import api from '../../services/api';
import User from '../User';
import './styles.css';

const ListUser = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  async function handleLoadUsers() {
    await api.get('dashboard/admin/users', {
      headers: {
        'authorization-token': localStorage.getItem('section-auth-token')
      }
    })

    .then(response => {
      dispatch(loadUsers(response.data));
    });
  }

  useEffect(() => {
    handleLoadUsers();
  })

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
          {
            users.map(user => 
              <User key={user.id} user={user} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ListUser;