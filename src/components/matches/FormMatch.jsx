import { useEffect, useState } from "react";
import roja from '../../assets/roja.png';
import amarilla from '../../assets/amarillo.png';
import { setToken, postMatch } from '../../services/appService.js';
import result, { postResult } from "../../services/result.js";
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
    refree: '',
    localTeam: 0,
    visitingTeam: 0,
    score:{...score}
}

const FormMatch = ({onMatch}) => {
    const [match, setMatch] = useState(matchDates);
    const [result, setResult] = useState(score);
    const [teams, setTeams] = useState([]);
    const [idLocalTeam, setIdLocalTeam] = useState(0);
    const [idVisitingTeam, setIdVisitingTeam] = useState(0);

    useEffect(() => {
        const getTeam = async () => {
            const teamList = await getTeams();
            setTeams(teamList);
        }
        getTeam();
    }, []);
    
    const handleInputMatch = ({target}) => {
        // if (target.name === "date") {
        //     const date = new Date(target.value);
        //     const dateFormater = date.toLocaleString("UTC");
        //     const dateForm = dateFormater.substring(0, dateFormater.indexOf(","));
        //     setMatch({
        //         ...match,
        //         [target.name]: dateForm
        //     });
        // }else{
        setMatch({
            ...match,
            [target.name]: target.value
        })
        
    }
    const handleInputTeamOption = (event) => {
        const selectedTeamName = event.target.value;
        const selectedTeam = teams.find(team => team.name === selectedTeamName);

        if (event.target.name === "localTeam") {
            setIdLocalTeam(selectedTeam.idTeam);
            setMatch({
                ...match,
                [event.target.name]: selectedTeam.idTeam
            });
            console.log(selectedTeam);
        }else{
            if (event.target.name === "visitingTeam") {
                setIdVisitingTeam(selectedTeam.idTeam);
                setMatch({
                    ...match,
                    [event.target.name]: selectedTeam.idTeam
                });
                console.log(selectedTeam);
            }
        console.log(idLocalTeam);
        console.log(idVisitingTeam);
        }
        
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
        setToken(window.localStorage.getItem('user'));
        console.log(match);
        setMatch((preve) => ({
            ...preve,
            score: { ...result }
        }));
        onMatch(match);
        const scor = await postResult(result);
        console.log(scor);
        setMatch(matchDates);
        setResult(score);
        postMatch(match);
    }
    return (
        <form onSubmit={handleMatch} id="formPartido">
            <h1 id="tituloPartido">Datos requeridos del partido</h1>
            <div className="date">
                <label htmlFor="">Fecha</label>
                <input 
                    type="date" 
                    placeholder="13/10/23"
                    name='date'
                    value={match.date}
                    onChange={handleInputMatch}/>
            </div>
            <div className="stadium">
                <label htmlFor="">Estadio</label>
                <input 
                    type="text" 
                    placeholder="Metropolitano"
                    name="stadium"
                    value={match.stadium}
                    onChange={handleInputMatch}/>
            </div>
            <div className="reffere">
                <label htmlFor="">Arbitro principal</label>
                <input 
                    type="text" 
                    placeholder="Wilman roldan"
                    name="refree"
                    value={match.refree}
                    onChange={handleInputMatch}/>
            </div>
                <div className="local-team">
                <label htmlFor="">Equipo local</label>
                <select name="localTeam" value={match.localTeam} onChange={handleInputTeamOption}>
                    {teams.map((team) => {
                        console.log(team);
                        return (
                            <option key={team.idTeam} value={team.idTeam}>{team.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="" id="goles">Goles</label>
                <input type="number" name="localGoal" value={result.localGoal} onChange={handleInputResult}/>
            </div>
            <div className="visiting-team">
                <label htmlFor="">Equipo visitante</label>
                <select name="visitingTeam" value={match.visitingTeam} onChange={handleInputTeamOption}>
                    {teams.map((team) => {
                            return (
                                <option key={team.idTeam} value={team.idTeam}>{team.name}</option>
                            )
                        })}
                </select>
                <input type="number" name="visitingGoal" value={result.visitingGoal} onChange={handleInputResult}/>
            </div>
            <img className="imgY" src={amarilla} alt="tarjeta amarilla" />
            <input className="yellow" type="number" name="numberCardYell" value={result.numberCardYell} onChange={handleInputResult}/>
            <img className="imgR" src={roja} alt="tarjeta roja" />
            <input className="red" type="number" name="numberCardRed" value={result.numberCardRed} onChange={handleInputResult}/>
            <button type="submit">Agregar</button>
        </form>
    )
}
export default FormMatch;