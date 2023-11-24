import { useState } from 'react';
import { login } from './auth.js';
import { ButtonSubmit } from '../buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { EyeIcon } from '../icons/icons.jsx'; 
import './styles/login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const hanleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const user = await login(email, password);
      if (user) {
        const userFinal = JSON.stringify(user);
        window.localStorage.setItem('user', userFinal);
        navigate('/partidos');
      }
    } catch (error) {
      console.log(error);
      setError('Error al iniciar sesión. Por favor, inténtelo de nuevo.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="form-login">
      <form onSubmit={hanleLogin} className="login">
        <h1 className="tittle-login">Iniciar sesión</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="user">
          <label className="label-email" htmlFor="">
            Correo
          </label>
          <input
            className="input-email"
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </div>
        <div className="password">
          <label className="label-password" htmlFor="">
            Contraseña
          </label>
          <input
            className="input-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <EyeIcon onClick={toggleShowPassword} visible={showPassword} />
        </div>
        <ButtonSubmit text="Login" />
      </form>
    </main>
  );
};

export default Login;
