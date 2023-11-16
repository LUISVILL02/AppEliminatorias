import { ButtonSubmit } from "../buttons/Button.jsx";
import { postTeams } from "../../services/teams.js";
import { useState } from "react";
import './FormTeamStyles.css';


const nacion = {
    name: "",
    flag: "",
    coach: ""
}
const apiFlags = "https://flagsapi.com/CO/flat/64.png"

const FormTeam = () => {
    const [team, setTeam] = useState(nacion)
    const [flag, setFlag] = useState('')

    const handleInputTeam = ({target}) => {
        console.log(target.value);
        setTeam({
            ...team,
            [target.name]: target.value
        })
        setFlag(team.flag)
    }
    const handleTeams = async (event) => {
        event.preventDefault();
        const teamPost = await postTeams(team);
        setTeam(nacion)
    }
    return (
        <form id="formEquipo" onSubmit={handleTeams}>
            <h1 id="datos">Datos del equipo</h1>
                <section id="inputs">
                <div className="formInput">
                    <label htmlFor="">Nombre</label>
                    <input className="inputTeam" 
                    type="text" placeholder="nombre" 
                    name="name"
                    value={team.name}
                    onChange={handleInputTeam}/>
                </div>
                <div className="formInput">
                    <label htmlFor="">Director técnico</label>
                    <input className="inputTeam" 
                    type="text" placeholder="entrenador" 
                    name="coach"
                    value={team.coach}
                    onChange={handleInputTeam}/>
                </div>
                <div className="formInput">
                    <label htmlFor="">Url bandera</label>
                    <input className="inputTeam" 
                    type="url" placeholder="url" 
                    name="flag"
                    value={team.flag}
                    onChange={handleInputTeam}/>
                </div>
            </section>
            <section id="preview">
                <img src={apiFlags} alt="bandera preview" />
            </section>
            <section id="boton">
                <ButtonSubmit text="Guardar"/>
            </section>

        </form>
    )
}
export default FormTeam;