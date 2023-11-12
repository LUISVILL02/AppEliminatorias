import { ButtonSubmit } from "../buttons/Button.jsx";
import './FormTeamStyles.css';

const FormTeam = () => {
    return (
        <form id="formEquipo">
            <h1 id="datos">Datos del equipo</h1>
                <section id="inputs">
                <div className="formInput">
                    <label htmlFor="">Nombre</label>
                    <input className="inputTeam" type="text" placeholder="nombre"/>
                </div>
                <div className="formInput">
                    <label htmlFor="">Director técnico</label>
                    <input className="inputTeam" type="text" placeholder="entrenador"/>
                </div>
                <div className="formInput">
                    <label htmlFor="">Url bandera</label>
                    <input className="inputTeam" type="url" placeholder="nombre"/>
                </div>
            </section>
            <section id="preview">
                <img src="" alt="bandera preview" />
            </section>
            <section id="boton">
                <ButtonSubmit text="Guardar"/>
            </section>

        </form>
    )
}
export default FormTeam;