import { useEffect, useState } from "react";
import { getById } from "../../services/teams.js";
import "./CardMatchStyles.css";

const CardMatch = ({ match }) => {
    const [teamLcal, setTeamLocal] = useState('');
    const [teamVisi, setTeamVisi] = useState('');
    useEffect(() => {
        const getTeam = async () => {
            const teamL = await getById(match.idLocalTeam);
            setTeamLocal(teamL);
            const teamV = await getById(match.idVisitingTeam);
            setTeamVisi(teamV);
        }
        getTeam();
    }, []);


    return (
        <div className="card">
            <div className="flag" id="left">
                <img src={teamLcal.flag} alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{teamLcal.name}</h1>
            </div>
            <span className="gol">{match.score.localGoal}</span>
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
            <span className="gol">{match.score.visitingGoal}</span>
            <div className="flag" id="right">
                <img src={teamVisi.flag} alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{teamVisi.name}</h1>
            </div>
        </div>
    )
}
export default CardMatch;