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
        <main className='form'>       
         <div className="singup-form">
            <form onSubmit={hanleSingup} className="singup">
                <h1 className='tittle-singup'>Registrarse</h1>
                    <div className="input-userr">
                        <label className='input-label' htmlFor="">Usuario</label>
                        <input type="text" onChange={({target}) => setUser(target.value)} className='input-user-name'/>
                    </div>
                    <div className="input-email">
                        <label className='input-label' htmlFor="">Correo</label>
                        <input type="email" onChange={({target}) => setEmail(target.value)} className='input-user-email'/>
                    </div>
                    <div className="input-passwordd">
                        <label id='contraseña' className='input-label' htmlFor="">Contraseña</label>
                        <input type="password" onChange={({target}) => setPassword(target.value)} className='input-user-password'/>
                    </div>
                    <div className='boton'>
                    <ButtonSubmit text="Registrarme"/>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Singup;