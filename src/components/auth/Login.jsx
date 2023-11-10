import { useState } from 'react'
import login from './auth.js'
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
            
        }
    }

    return (
        <form onSubmit={hanleLogin} className="login">
            <h1>Iniciar sesion</h1>
            <div className="input-user">
                <label htmlFor="">Correo</label>
                <input type="email" placeholder="Usuario" onChange={({target}) => setEmail(target.value)}/>
            </div>
            <div className="input-password">
                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder="Usuario" onChange={({target}) => setPassword(target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;