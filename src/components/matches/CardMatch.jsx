import "./CardMatchStyles.css";
const CardMatch = ({ match }) => {
    return (
        <div className="card">
            <div className="flag" id="left">
                <img src="" alt="bandera" />
                <h1 className="nombrePais">{match.localTeam}</h1>
            </div>
            <span className="gol">{match.localGoals}</span>
            <div className="datas">
                <p id="fecha">{match.date}</p>
                <p id="raya">-</p>
                <p id="estadio">{match.stadium}</p>
                <p id="refree">{match.refree}</p>
            </div>
            <span className="gol">{match.visitingGoals}</span>
            <div className="flag" id="right">
                <img src="" alt="bandera" />
                <h1 className="nombrePais">{match.visitingTeam}</h1>
            </div>
        </div>
    )
}
export default CardMatch;