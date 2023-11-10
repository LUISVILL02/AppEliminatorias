import  Search  from '../search/Search.jsx'
import { Link }  from 'react-router-dom'

const Header = () => {
    const user = true
    return (
        <header>
            
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/partidos">Partidos</Link>
                        </li>
                        <li>
                            <Link to="/api">Api</Link>
                        </li>
                        {user && 
                        <li>
                            <Link to="/equipos">Equipos</Link>
                        </li>}
                        <li>
                            <Search />
                        </li>
                        <li>
                            {user ? <Link to="/user">icono</Link> : 
                            <Link to="/login">Login</Link>}
                        </li>
                    </ul>
                </nav>
            
        </header>
    )
}

export default Header; 