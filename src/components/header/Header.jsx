import  Search  from '../search/Search.jsx'
import { Link }  from 'react-router-dom'
import "./headerStyle.css";
import { HomeIcon, UserIncon } from '../icons/Icons.jsx';
//import { ButtonNavigate } from '../buttons/Button.jsx';


const Header = () => {
    let userLocal = window.localStorage.getItem('user') ?? {
        token: " ",
        type: "",
        id: 0,
        username: "",
        email: "",
        roles: []
    };
    const user = userLocal.token
    return (
        <header>
                <nav>
                    <ul className='ul1'>
                        <li>
                            <Link to="/" className='navi'><HomeIcon/>  Home</Link>
                        </li>
                        <li>
                            <Link to="/partidos" className='navi'>Partidos</Link>
                        </li>
                        <li>
                            <Link to="/api" className='navi'>Api</Link>
                        </li>
                        {user !== " " && 
                        <li>
                            <Link to="/equipos" className='navi'>Equipos</Link>
                        </li>}
                    </ul>
                    <ul className='ul2'>
                        <li>
                            <Search />
                        </li>
                        <li>
                            {user !== " " ? <Link to="/user"><UserIncon/></Link> : 
                            <Link to="/login" className='btn-login'>Login</Link>}
                        </li>
                    </ul>
                </nav>
            
        </header>
    )
}

export default Header; 