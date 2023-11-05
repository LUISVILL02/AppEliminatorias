import  Search  from '../search/Search.jsx'

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <a href="">Home</a>
                    <a href="">Partidos</a>
                    <Search />
                </li>
            </ul>
        </header>
    )
}

export default Header;