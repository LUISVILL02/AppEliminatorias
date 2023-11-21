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
const nameDefault = "Colombia"

export const FormTeam = () => {
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
        <main className="main-form-equipos">
            <form id="formEquipo" onSubmit={handleTeams}>
                <h1 id="datos">Datos del equipo</h1>
                <div className="container-teams">
                    <section className="inputs">
                        <div className="formInput">
                            <label className="label-team" htmlFor="">Nombre</label>
                            <input className="inputTeam" 
                            type="text" placeholder="nombre" 
                            name="name"
                            value={team.name}
                            onChange={handleInputTeam}/>
                        </div>
                        <div className="formInput">
                            <label className="label-team" htmlFor="">Director técnico</label>
                            <input className="inputTeam" 
                            type="text" placeholder="entrenador" 
                            name="coach"
                            value={team.coach}
                            onChange={handleInputTeam}/>
                        </div>
                        <div className="formInput">
                            <label className="label-team" htmlFor="">Url bandera</label>
                            <input className="inputTeam" 
                            type="url" placeholder="url" 
                            name="flag"
                            value={team.flag}
                            onChange={handleInputTeam}/>
                            <a className="url" href="https://flagsapi.com/">Selecciona tu bandera</a>
                        </div>
                    </section>
                    <section className="preview-boton">
                        <div className="team-preview">
                            <img className="imagen-team-preview" onChange={handleInputTeam} src={team.flag 
                                !== "" ? team.flag : apiFlags} alt="bandera preview" />  
                            <span className="team-name-preview" onChange={handleInputTeam}>{team.name !== "" ? team.name : nameDefault}</span>
                        </div>
                        <ButtonSubmit text="Guardar"/>
                    </section>
                </div>

            </form>
        </main>
    )
}
                        
export default FormTeam;