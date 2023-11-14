import { useState } from 'react'
import { login } from './auth.js'
import {setToken} from '../../services/appService.js'
import { ButtonSubmit } from '../buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';
import './styles/login.css'


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const hanleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await login(email, password);
            if(user){
                console.log("user desde el componente: ",user);
                window.localStorage.setItem('user', user.token);  
                console.log(window.localStorage.getItem('user'));
                navigate('/partidos');
            }
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