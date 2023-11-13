import { useState } from 'react'
import { login } from './auth.js'
import { ButtonSubmit } from '../buttons/Button.jsx';
import './styles/login.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hanleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await login(email, password);
            console.log(user.json());
            window.localStorage.setItem('user', JSON.stringify(user));  
            //llamar a la funcion que estructura el token
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="form">
            <form onSubmit={hanleLogin} className="login">
                <h1 className='tittle'>Iniciar sesion</h1>
                <div className="input-user">
                    <label htmlFor="">Correo</label>
                    <input type="email" onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="input-password">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <ButtonSubmit text="Login"/>
            </form>
        </main>
    )
}

export default Login;