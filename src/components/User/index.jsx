import React from 'react';
import { FiEdit as Edit, FiTrash2 as Trash } from 'react-icons/fi';
import './styles.css';

const User = ({ user }) => {
  
  return (
    <div className="user">
      <div className="user__data">
        <img src={user.image_url} alt="avatar"/>
      </div>

      <div className="user__data">
        { user.firstName + ' ' + user.lastName }
      </div>

      <div className="user__data">
        { user.email }
      </div>

      <div className="user__data space">
        Ativo
      </div>

      <div className="user__data">
        <button className="edit-btn"> <Edit /> </button>
        <button className="trash-btn"> <Trash /> </button>
      </div>
    </div>
  );
}

export default User;