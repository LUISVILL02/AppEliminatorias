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
                    <h1 id='titulo'>Eliminatorias<br/> mundiales de la FIFA</h1>
                    <p id='parrafo'>Consulta el estado de las<br/> eliminatorias rumbo al mundial <br/>de Estados unidos, Cánada y <br/>mexico del 2026.</p>
                    <div className="butons">
                        {user ? <button className='botones' onClick={hanleSesion}>logut</button>: <>
                            <ButtonNavigate text="Login" route="/login" className="botones"/>
                            <ButtonNavigate text="Register" route="/register" className="botones"/>
                        </>}
                    </div>
                </section>
                <section className='image-home'>
                    <img src={copa} alt="Imagen de la copa" id='copa'/>
                </section>
            </main>
        </>
    )
}
export default Home;