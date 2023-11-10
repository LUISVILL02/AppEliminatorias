import { Button } from '../buttons/Button.jsx'


const Home = () => {
    return (
        <>
            <main>
                <section>
                    <h1>Eliminatorias mundiales de la FIFA</h1>
                    <p>Consulta el estado de las eliminatorias rumbo al mundial de Estados unidos, Cánada y mexico del 2026.</p>
                    <div className="butons">
                        <Button text="Login" route="/login"/>
                        <Button text="Register" route="/register"/>
                    </div>
                </section>
                <section>
                    <img src="" alt="" />
                </section>
            </main>
        </>
    )
}
export default Home;