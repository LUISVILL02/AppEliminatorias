import { singup } from './auth.js';
import { useState } from 'react';
import { ButtonSubmit } from '../buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { EyeIcon } from '../icons/icons.jsx'; 
import './styles/singup.css';

const Singup = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const hanleSingup = async (e) => {
    e.preventDefault();

    if (!user || !email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Ingrese un correo electrónico válido.');
        return;
      }

      const userRegister = await singup(user, email, password);
      if (userRegister) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      setError('Error al crear la cuenta. Por favor, inténtelo de nuevo.');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="form-singup">
      <div className="singup-form">
        <form onSubmit={hanleSingup} className="singup">
          <h1 className="tittle-singup">Crea tu cuenta</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-user-singup">
            <label className="input-label" htmlFor="">
              Usuario
            </label>
            <input
              type="text"
              onChange={({ target }) => setUser(target.value)}
              className="input-user-name"
              required
            />
          </div>
          <div className="input-email-singup">
            <label className="input-label" htmlFor="">
              Correo
            </label>
            <input
              type="email"
              onChange={({ target }) => setEmail(target.value)}
              className="input-user-email"
              required
            />
          </div>
          <div className="input-password-singup">
            <label id="contraseña" className="input-label" htmlFor="">
              Contraseña
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={({ target }) => setPassword(target.value)}
              className="input-user-password"
              required
            />
            <EyeIcon onClick={toggleShowPassword} visible={showPassword} />
          </div>
          <div className="boton">
            <ButtonSubmit text="Signup" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Singup;
