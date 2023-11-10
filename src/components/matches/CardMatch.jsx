
const CardMatch = ({ match }) => {
    return (
        <div className="card">
            <div className="flag">
                <img src="" alt="" />
                <h1>{match.localteam}</h1>
            </div>
            <span>{match.localteam_score}</span>
            <div className="datas">
                <p>{match.date}</p>
                <p>-</p>
                <p>{match.stadium}</p>
                <p>{match.reffere}</p>
            </div>
            <span>{match.visitorteam_score}</span>
            <div className="flag">
                <img src="" alt="" />
                <h1>{match.visitorteam}</h1>
            </div>
        </div>
    )
}
export default CardMatch;