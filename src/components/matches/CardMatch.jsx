import { useEffect, useState } from "react";
import { getById } from "../../services/teams.js";
import { EditIcon } from '../icons/Icons.jsx';
import { updateResult } from '../../services/result.js';
import "./CardMatchStyles.css";

const score ={
    visitingGoal: 0,
    localGoal: 0,
    numberCardRed: 0,
    numberCardYell: 0
}

const CardMatch = ({ match }) => {
    const [teamLcal, setTeamLocal] = useState('');
    const [teamVisi, setTeamVisi] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [result, setResult] = useState(match.score);

    let userLocal = window.localStorage.getItem('user') ?? {
        token: " ",
        type: "",
        id: 0,
        username: "",
        email: "",
        roles: []
    };
    const user = userLocal.token

    useEffect(() => {
        const getTeam = async () => {
            const teamL = await getById(match.idLocalTeam);
            setTeamLocal(teamL);
            const teamV = await getById(match.idVisitingTeam);
            setTeamVisi(teamV);
        }
        getTeam();
    }, []);

    const hanleEdit = (click) => {
        setIsEditing(click);
    }


    const hanleInputResult = async (event) => {
        if(isEditing){
            setResult((preResult) => ({
                ...preResult,
                [event.target.name]: event.target.value
            }));

            const newResult = {
                numberCardRed: match.score.numberCardRed,
                numberCardYell: match.score.numberCardYell,
                localGoal: event.target.name === 'localGoal' ? event.target.value : result.localGoal,
                visitingGoal: event.target.name === 'visitingGoal' ? event.target.value : result.visitingGoal
            }
            const update = await updateResult(match, newResult);
            console.log(newResult);
        }
    }


    return (
        <div className="card">
            {user !== " " && <EditIcon onClic={hanleEdit}/>}
            <div className="flag" id="left">
                <img src={teamLcal.flag} alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{teamLcal.name}</h1>
            </div>
            {isEditing ? <input onChange={hanleInputResult} 
                        name="localGoal" value={result.localGoal} 
                        className="input-match-edit-teamL" type="number" placeholder={match.score.localGoal}/> : <span className="gol">{result.localGoal}</span>}
            <div className="datas">
                <p className="fecha">{match.date}</p>
                <div className="vs">
                    <p id="raya"> - </p>    
                </div>
                <div className="sta-refe">
                    <p className="estadio">{match.stadium}</p>
                    <p className="refree">{match.mainFerefe}</p>
                </div>
            </div>
            {isEditing ? <input onChange={hanleInputResult} name="visitingGoal" 
                            value={result.visitingGoal} className="input-match-edit-teamV" type="number" placeholder={match.score.visitingGoal}/> : 
                            <span className="gol">{result.visitingGoal}</span>}
            <div className="flag" id="right">
                <img src={teamVisi.flag} alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{teamVisi.name}</h1>
            </div>
        </div>
    )
}
export default CardMatch;