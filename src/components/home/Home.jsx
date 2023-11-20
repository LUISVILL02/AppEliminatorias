import { ButtonNavigate } from '../buttons/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./HomeStyles.css";
import copa from "../../assets/copaFondo.jpg";

const Home = () => {
    const [isSesion, setIsSesion] = useState(false);
    const user = window.localStorage.getItem('user');
    const navigate = useNavigate();


    const hanleSesion = () => {
        window.localStorage.removeItem('user');
        navigate('/login');
    }
    return (
        <>
            <main className='main-home'>
                <section className='text'>
                    <h1 id='titulo'>Eliminatorias mundiales de la FIFA</h1>
                    <p id='parrafo'>Consulta el estado de las<br/> eliminatorias rumbo al Mundial <br/>de Estados Unidos, Canadá y <br/>México del 2026.</p>
                    <div className="butons">
                        {user ? <button className='botones-logup-home' onClick={hanleSesion}>Logut</button>: <>
                            <ButtonNavigate text="Login" route="/login" className="botones"/>
                            <ButtonNavigate text="Register" route="/register" className="botones"/>
                        </>}
                    </div>
                </section>
                <section className='image-home'>
                    <div className='copa'></div>
                </section>
            </main>
        </>
    )
}
export default Home;