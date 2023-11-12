import { Button } from '../buttons/Button.jsx';
import "./HomeStyles.css";
import copa from "../../assets/copaFondo.jpg";

const Home = () => {
    return (
        <>
            <main>
                <section>
                    <h1 id='titulo'>Eliminatorias<br/> mundiales de la FIFA</h1>
                    <p id='parrafo'>Consulta el estado de las<br/> eliminatorias rumbo al mundial <br/>de Estados unidos, Cánada y <br/>mexico del 2026.</p>
                    <div className="butons">
                        <Button text="Login" route="/login" className="botones"/>
                        <Button text="Register" route="/register" className="botones"/>
                    </div>
                </section>
                <section>
                    <img src={copa} alt="Imagen de la copa" id='copa'/>
                </section>
            </main>
        </>
    )
}
export default Home;