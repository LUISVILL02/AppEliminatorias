import "./CardMatchStyles.css";
const CardMatch = ({ match }) => {
    return (
        <div className="card">
            <div className="flag" id="left">
                <img src="https://flagsapi.com/CO/flat/64.png" alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{match.localTeam}</h1>
            </div>
            <span className="gol">{match.localGoals}</span>
            <div className="datas">
                <p className="fecha">{match.date}</p>
                <div className="vs">
                    <p id="raya"> - </p>    
                </div>
                <div className="sta-refe">
                    <p className="estadio">{match.stadium}</p>
                    <p className="refree">{match.refree}</p>
                </div>
            </div>
            <span className="gol">{match.visitingGoals}</span>
            <div className="flag" id="right">
                <img src="https://flagsapi.com/BE/flat/64.png" alt="bandera" className="bandera"/>
                <h1 className="nombrePais">{match.visitingTeam}</h1>
            </div>
        </div>
    )
}
export default CardMatch;