// Header.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./headerStyle.css";
import { HomeIcon, UserIncon } from '../icons/Icons.jsx';

const Header = () => {
  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {
      "token": " ",
      "type": "",
      "id": 0,
      "username": "",
      "email": "",
      "roles": []
    };
    return storedUser;
  });

  useEffect(() => {
    const updateUser = () => {
      const storedUser = JSON.parse(localStorage.getItem('user')) || {};
      setUser(storedUser);
    };

    updateUser();
    window.addEventListener('userUpdated', updateUser);
    window.addEventListener('userLoggedOut', updateUser);

    return () => {
      window.removeEventListener('userUpdated', updateUser);
      window.removeEventListener('userLoggedOut', updateUser);
    };
  }, []);

  const isAdmin = user.roles?.includes('ROLE_ADMIN');

  return (
    <header>
      <nav>
        <ul className='ul1'>
          <li>
            <Link to="/" className='navi'><HomeIcon /> Home</Link>
          </li>
          <li>
            <Link to="/partidos" className='navi'>Partidos</Link>
          </li>
          <li>
            <Link to="/api" className='navi'>Api</Link>
          </li>
          {user.token && isAdmin &&
            <li>
              <Link to="/equipos" className='navi'>Equipos</Link>
            </li>}
        </ul>
        <ul className='ul2'>
          <li>
            {user.token ? (
              <Link to="/user" className='navi'><UserIncon /></Link>
            ) : (
              <Link to="/login" className='btn-login'>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
