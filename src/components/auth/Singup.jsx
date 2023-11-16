import { singup } from './auth.js'
import { useState } from 'react'
import { ButtonSubmit } from '../buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';
import './styles/singup.css'

const Singup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const navigate = useNavigate();

    const hanleSingup = async (e) => {
        e.preventDefault()
        try {
            const userRegister = singup(user, email, password);
            if(userRegister){
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="singup-form">
            <form onSubmit={hanleSingup} className="singup">
                <h1 className='tittle-singup'>Registrarse</h1>
                <div className="input-userr">
                    <label htmlFor="">Usuario</label>
                    <input type="text" onChange={({target}) => setUser(target.value)}/>
                </div>
                <div className="input-user-email">
                    <label htmlFor="">Correo</label>
                    <input type="email" onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="input-passwordd">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <ButtonSubmit text="Register"/>
            </form>
        </div>
    )
}

export default Singup;