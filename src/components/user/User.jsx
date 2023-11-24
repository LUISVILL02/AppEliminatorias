import React from 'react';
import './UserStyles.css';
import UserImg from  "../../assets/userImg.png";
const User = () => {

  let userLocal = window.localStorage.getItem('user') ?? {
    "token": " ",
    "type": "",
    "id": 0,
    "username": "",
    "email": "",
    "roles": []
  };

  const userJson = userLocal.token !== " " ? JSON.parse(userLocal) : userLocal;

  if (!userJson || !userJson.username) {
    console.error("Error: El objeto 'userJson' no está definido o no tiene la propiedad 'username'");
    return (
      <div className="user-container">
      </div>
    );
  }

  const getRoleDisplayName = () => {
    if (userJson.roles.includes('ROLE_ADMIN')) {
      return 'Administrador';
    } else if (userJson.roles.includes('ROLE_USER')) {
      return 'Usuario Común';
    } 
  };

  return (
    <div className="user-container">
        <h1 className="user-title">USUARIO</h1>
      <img className="avatar" src={UserImg} alt="Avatar del usuario" />
      <h2 className="username">{userJson.username}</h2>
      <p className="email">Correo: {userJson.email}</p>
      <p className="rol">Rol: {getRoleDisplayName()}</p>
    </div>
  );
}

export default User;
