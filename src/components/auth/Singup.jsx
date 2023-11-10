import singup from './auth.js'
import { useState } from 'react'

const Singup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const hanleSingup = async (e) => {
        e.preventDefault()
        try {
            //const userRegister = singup(user, email, password);
            console.log(user, " ",email," ", password);
            //console.log(userRegister);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={hanleSingup} className="login">
            <h1>Registrarse</h1>
            <div className="input-user">
                <label htmlFor="">Usuario</label>
                <input type="text" placeholder="Usuario" onChange={({target}) => setUser(target.value)}/>
            </div>
            <div className="input-user-email">
                <label htmlFor="">Correo</label>
                <input type="email" placeholder="Correo" onChange={({target}) => setEmail(target.value)}/>
            </div>
            <div className="input-password">
                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder="Usuario" onChange={({target}) => setPassword(target.value)}/>
            </div>
            <button type="submit">Registrase</button>
        </form>
    )
}

export default Singup;