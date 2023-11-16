import { useEffect, useState } from "react";
import roja from '../../assets/roja.png';
import amarilla from '../../assets/amarillo.png';
import { postMatch } from '../../services/appService.js';
import { postResult } from "../../services/result.js";
import { getTeams } from "../../services/teams.js";
import "./FormMatchStyles.css";


const score ={
    visitingGoal: 0,
    localGoal: 0,
    numberCardRed: 0,
    numberCardYell: 0
}
const matchDates = {
    date: '',
    stadium: '',
    mainFerefe: '',
    idLocalTeam: 0,
    idVisitingTeam: 0,
    score:{
        id: 0,
        ...score}
}

const FormMatch = ({onMatch}) => {
    const [match, setMatch] = useState(matchDates);
    const [result, setResult] = useState(score);
    const [teams, setTeams] = useState([]);
    const [local, setLocal] = useState(0);
    const [visiting, setVisiting] = useState(0);

    useEffect(() => {
        const getTeam = async () => {
            const teamList = await getTeams();
            setTeams(teamList);
        }
        getTeam();
    }, []);
    
    const handleInputMatch = ({target}) => {
        setMatch({
            ...match,
            [target.name]: target.value
        })  
    }
    const handleInputTeamOptionLocal = (event) => {
        const selectedTeamName = event.target.value;
        setLocal(selectedTeamName);
    }
    const handleInputTeamOptionVisiting = (event) => {
        const selectedTeamName = event.target.value;
        setVisiting(selectedTeamName);
    }
    const handleInputResult = ({target}) => {
        setResult({
            ...result,
            [target.name]: target.value
        })
        setMatch((prevMatch) => ({
            ...prevMatch,
            score: {
                ...prevMatch.score,
                [target.name]: target.value
            }
        }));
    }
    const handleMatch = async (event) => {
        event.preventDefault();
        
        const scor = await postResult(result);
        setMatch(matchDates);
        setResult(score);
        
        const updateMatch = {
            ...match,
            idLocalTeam: local,
            idVisitingTeam: visiting,
            score: { 
                id: scor.id,
                ...result }
            }
        setMatch(matchDates);
        onMatch(updateMatch)
        const addmatch = await postMatch(updateMatch);
    }
    return (
        <section className="main-formulario-partidos">
            <form onSubmit={handleMatch} className="formPartido">
                <h1 className="tituloPartido">Datos requeridos del partido</h1>
                <div className="datos-generales">
                    <div className="generales">
                        <div className="date">
                            <label htmlFor="">Fecha</label>
                            <input 
                                type="date" 
                                placeholder="dd/mm/yyyy"
                                name='date'
                                value={match.date}
                                onChange={handleInputMatch}/>
                        </div>
                        <div className="stadium">
                            <label htmlFor="">Estadio</label>
                            <input 
                                type="text" 
                                placeholder="nombre del estadio"
                                name="stadium"
                                value={match.stadium}
                                onChange={handleInputMatch}/>
                        </div>
                        <div className="reffere">
                            <label htmlFor="">Arbitro principal</label>
                            <input 
                                type="text" 
                                placeholder="nombre del arbitro"
                                name="mainFerefe"
                                value={match.mainFerefe}
                                onChange={handleInputMatch}/>
                        </div>
                    </div>
                    <div className="for-teams">
                        <div className="local-team">
                            <div className="datas-local-1">
                                <label className="name-team-local" htmlFor="">Equipo local</label>
                                <select name="idLocalTeam" value={local} onChange={handleInputTeamOptionLocal}>
                                    <option value="">Seleccione un equipo</option>
                                    {teams.map((team) => {
                                        return (
                                            <option key={team.idTeam} value={team.idTeam}>{team.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="datas-local-2">
                                <label htmlFor="" className="goles">Goles</label>
                                <input type="number" name="localGoal" value={result.localGoal} onChange={handleInputResult}/>
                            </div>
                        </div>
                        <div className="visiting-team">
                            <div className="datas-visitor-1">
                                <label className="name-visiting-team" htmlFor="">Equipo visitante</label>
                                <select name="idVisitingTeam" value={visiting} onChange={handleInputTeamOptionVisiting}>
                                    <option value="">Seleccione un equipo</option>
                                    {teams.map((team) => {
                                            return (
                                                <option key={team.idTeam} value={team.idTeam}>{team.name}</option>
                                            )
                                        })}
                                </select>
                            </div>
                            <input type="number" name="visitingGoal" value={result.visitingGoal} onChange={handleInputResult}/>
                        </div>
                        <div className="cards">
                            <div className="layaut-cards">
                                <div className="card-yellow">
                                    <img className="imgY" src={amarilla} alt="tarjeta amarilla" />
                                    <input className="yellow" type="number" name="numberCardYell" value={result.numberCardYell} onChange={handleInputResult}/>
                                </div>
                            </div>
                            <div className="card-red">
                                <img className="imgR" src={roja} alt="tarjeta roja" />
                                <input className="red" type="number" name="numberCardRed" value={result.numberCardRed} onChange={handleInputResult}/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Agregar</button>
            </form>
        </section>
    )
}
export default FormMatch;