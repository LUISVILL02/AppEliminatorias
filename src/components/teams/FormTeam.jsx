import { ButtonSubmit } from "../buttons/Button.jsx"


const FormTeam = () => {
    return (
        <form>
            <h1>Datos del equipo</h1>
            <section className="inputs">
                <div className="name">
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="nombre"/>
                </div>
                <div className="coach">
                    <label htmlFor="">Director técnico</label>
                    <input type="text" placeholder="entrenador"/>
                </div>
                <div className="url-flag">
                    <label htmlFor="">Url bandera</label>
                    <input type="url" placeholder="nombre"/>
                </div>
            </section>
            <section className="preview">
                <img src="" alt="bandera preview" />
                <ButtonSubmit text="Guardar"/>
            </section>
        </form>
    )
}
export default FormTeam;