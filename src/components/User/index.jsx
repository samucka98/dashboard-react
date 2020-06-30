import React from 'react';
import { FiEdit as Edit, FiTrash2 as Trash } from 'react-icons/fi';
import './styles.css';

const User = () => {
  
  return (
    <div className="user">
      <div className="user__data">
        <img src="http://localhost:5000/uploads/admin.jpg" alt="avatar"/>
      </div>

      <div className="user__data">
        Samuel Lima
      </div>

      <div className="user__data">
        samuelibiapinolima@gmail.com
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