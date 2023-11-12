import { useState } from "react";
import roja from '../../assets/roja.png';
import amarilla from '../../assets/amarillo.png';
import "./FormMatchStyles.css";

const matchDates = {
    date: '',
    stadium: '',
    refree: '',
    localTeam: '',
    visitingTeam: '',
    localGoals: 0,
    visitingGoals: 0,
    yellowCards: 0,
    redCards: 0
}

const FormMatch = ({onMatch}) => {
    const [match, setMatch] = useState(matchDates)
    const handleInputMatch = ({target}) => {
        const {date, stadium, refree, localTeam, visitingTeam, localGoals, visitingGoals, yellowCards, redCards} = target;
        setMatch({
            ...match,
            [target.name]: target.value
        })
    }
    const handleMatch = (event) => {
        //llamar a la funcion que hace el post del partido
        event.preventDefault();
        console.log("datos del partido", match);
        onMatch(match);
        setMatch(matchDates);
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
                <select name="localTeam" value={match.localTeam} onChange={handleInputMatch}>
                    <option value="opcion">Equipo</option>
                    <option value="colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <label htmlFor="" id="goles">Goles</label>
                <input type="number" name="localGoals" value={match.localGoals} onChange={handleInputMatch}/>
            </div>
            <div className="visiting-team">
                <label htmlFor="">Equipo visitante</label>
                <select name="visitingTeam" value={match.visitingTeam} onChange={handleInputMatch}>
                    <option value="opcion">Equipo</option>
                    <option value="colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <input type="number" name="visitingGoals" value={match.visitingGoals} onChange={handleInputMatch}/>
            </div>
            <img className="imgY" src={amarilla} alt="tarjeta amarilla" />
            <input className="yellow" type="number" name="yellowCards" value={match.yellowCards} onChange={handleInputMatch}/>
            <img className="imgR" src={roja} alt="tarjeta roja" />
            <input className="red" type="number" name="redCards" value={match.redCards} onChange={handleInputMatch}/>
            <button type="submit">Agregar</button>
        </form>
    )
}
export default FormMatch;