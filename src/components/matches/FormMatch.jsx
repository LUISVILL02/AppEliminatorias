

const FormMatch = () => {

    const handleMatch = (e) => {
        //llamar a la funcion que hace el post del partido
    }
    return (
        <form onSubmit={handleMatch}>
            <h1>Datos requeridos del partido</h1>
            <div className="date">
                <label htmlFor="">Fecha</label>
                <input type="date" placeholder="13/10/23"/>
            </div>
            <div className="stadium">
                <label htmlFor="">Estadio</label>
                <input type="text" placeholder="Metropolitano"/>
            </div>
            <div className="reffere">
                <label htmlFor="">Arbitro principal</label>
                <input type="text" placeholder="Wilman roldan"/>
            </div>
            <div className="local-team">
                <label htmlFor="">Equipo local</label>
                <select name="" id="">
                    <option value="colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <label htmlFor="">Goles</label>
                <input type="number" />
                <img src="" alt="tarjeta amarilla" />
                <input type="number" />
                <img src="" alt="tarjeta roja" />
                <input type="number" />
            </div>
            <div className="visiting-team">
                <label htmlFor="">Equipo visitante</label>
                <select name="" id="">
                    <option value="colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <input type="number" />
                <input type="number" />
                <input type="number" />
            </div>
            <button type="submit">Agregar</button>
        </form>
    )
}
export default FormMatch;