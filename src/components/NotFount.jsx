import thinkingImage from '../assets/thinking.png';
import "./NotFountStyles.css";
export const NotFound = () => {
    return (
        <main className="contenedor">
            <img id="pensando" src={thinkingImage} alt="" />
            <h1 id="error">Error 404</h1>
            <h2 id="mensaje">Parece ser que no es lo que buscabas</h2>
        </main>
    )
}