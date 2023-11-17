import { useState } from 'react'
import { login } from './auth.js'
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
                const userFinal = JSON.stringify(user);
                window.localStorage.setItem('user', userFinal);  
                navigate('/partidos');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="form">
            <form onSubmit={hanleLogin} className="login">
                <h1 className='tittle-login'>Iniciar sesion</h1>
                <div className="user">
                    <label className="label-email" htmlFor="">Correo</label>
                    <input className="input-email" type="email" onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="password">
                    <label className="label-password" htmlFor="">Contraseña</label>
                    <input className='input-password' type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <ButtonSubmit text="Login"/>
            </form>
        </main>
    )
}

export default Login;