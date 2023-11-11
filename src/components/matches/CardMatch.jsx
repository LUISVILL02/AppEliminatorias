
const CardMatch = ({ match }) => {
    return (
        <div className="card">
            <div className="flag">
                <img src="" alt="" />
                <h1>{match.localTeam}</h1>
            </div>
            <span>{match.localGoals}</span>
            <div className="datas">
                <p>{match.date}</p>
                <p>-</p>
                <p>{match.stadium}</p>
                <p>{match.refree}</p>
            </div>
            <span>{match.visitingGoals}</span>
            <div className="flag">
                <img src="" alt="" />
                <h1>{match.visitingTeam}</h1>
            </div>
        </div>
    )
}
export default CardMatch;